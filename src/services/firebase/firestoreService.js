//import React from 'react';

import {getFirestore, getFirebase} from './firebaseConfig';

const db = getFirestore();
const fb = getFirebase();

export function getItemsByCategory(categoryName, onRequestCompleted = () => {}, onRequestFailed = () => {}){
    const category = db.collection('categorias').where('categoryName', '==', categoryName).get();

    category.then((querySnapshotCategory) => {
        if(querySnapshotCategory.size > 0) {
            const id = querySnapshotCategory.docs.map(doc => doc.id)[0];
            const categoryRef = db.collection("categorias").doc(id);
            const items = db.collection('productos').where('category', '==', categoryRef).get();
            items.then((querySnapshotItems) => {
                const requestedItems = querySnapshotItems.docs.map(doc => ({...doc.data(), id: doc.id}));
                onRequestCompleted(requestedItems);
            }).catch((error) => {
                onRequestFailed(error);
            });
        }
    }).catch((error) => {
        onRequestFailed(error);
    });
}

export function getCategoriesList(onRequestCompleted = () => {}, onRequestFailed = () => {}) {
    const categoriesQuery = db.collection("categorias").get();
    
    categoriesQuery.then((querySnapshot) => {
        if(querySnapshot.size > 0){
            const categories = querySnapshot.docs.map(doc => ({...doc.data()}));
            onRequestCompleted(categories);
        }
    }).catch((error) => {
        onRequestFailed(error);
    });
}

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
    }).catch( (error) => {
        onRequestFailed(error);
    });
}