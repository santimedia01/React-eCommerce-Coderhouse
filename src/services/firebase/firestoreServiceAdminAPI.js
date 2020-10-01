//import React from 'react';

import { getFirestore /*, getFirebase*/ } from './firebaseConfig';

const db = getFirestore();
//const fb = getFirebase();


export function uploadProduct(categoryName, name, description, shortSpecs, image, maxProducts, minProducts, price, stock, selledQuantity, uniqueProductUrlName){
    let data = {
        name: name,
        description: description,
        shortSpecs: shortSpecs,
        image: image,
        maxProducts: maxProducts,
        minProducts: minProducts,
        price: price,
        stock: stock,
        selledQuantity: selledQuantity,
        uniqueProductUrlName: uniqueProductUrlName,
    };
    const category = db.collection('categorias').where('categoryName', '==', categoryName).get();

    category.then((querySnapshot) => {
        if(querySnapshot.size > 0){
            const id = querySnapshot.docs.map(doc => doc.id)[0];
            const categoryRef = db.collection("categorias").doc(id);

            data = {...data, category: categoryRef};

            db.collection('productos').add(data);
        } else {
            console.log(`Categoría ${categoryName} no encontrada`);
        }
    }).catch((error) => {
        console.log(error);
    });

}
