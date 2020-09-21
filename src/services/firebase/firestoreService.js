import React from 'react';

import {getFirestore} from './firebaseConfig';

/*

export function getItemsByCategory(categoryName, onRequestCompleted = () => {}, onRequestFailed = () => ()){
    const db = getFirestore();
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