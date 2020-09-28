//import React from 'react';

import {getFirestore, getFirebase} from './firebaseConfig';

const db = getFirestore();
const fb = getFirebase();
/*
export function getItemsByCategory(categoryName, onRequestCompleted = () => {}, onRequestFailed = () => ()){
    const categoryDbRef = db.collection('categorias').doc('AqS5ogwezOhZzrLYE5f4');
    const requestedItems = db.collection('productos').where('category', '==', categoryDbRef).get();

    let items;
    requestedItems.then((querySnapshot) => {
        if(querySnapshot.size > 0) {
            items = [querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))];
            onRequestCompleted();
        }
    }).catch((error) => {
        onRequestFailed(error);
    });

    return items;
}

export function getItemByURL


*/

export function createNewBuyOrder(buyer, items, totalCartPrice, onRequestCompleted = () => {}, onRequestFailed = () => {}){
    const newOrder = {
        buyer: buyer, 
        items: items,
        date: fb.firestore.Timestamp.fromDate(new Date()),
        totalCartPrice: totalCartPrice,
    };

    const orders = db.collection("ordenes");

    orders.add(newOrder).then(({id}) => {
        onRequestCompleted(id);
    }).catch( error => {
        onRequestFailed(error);
    });
}
