import React from 'react';
import {useParams} from 'react-router-dom';

import {getFirestore} from '../services/firebase/firebaseConfig';

import ItemDetail from '../components/products/ItemDetail';
import PaginaNoEncontrada from '../components/error/404/PaginaNoEncontrada';

export default function Main() {
    const {id} = useParams();
    //TODO: isFetchingItem con el mockup gris de cosas cargando de material UI
    const [actualItem, setActualItem] = React.useState([]);
    React.useEffect(() => {
        const requestedItem = getFirestore().collection('productos').where('uniqueProductUrlName', '==', id).get();
        
        requestedItem.then((querySnapshot) => {
            if(querySnapshot.size > 0) {
                setActualItem(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            }
        });
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            {actualItem.length > 0 ? <ItemDetail item={actualItem[0]} /> : <PaginaNoEncontrada  productNotFound/>}
        </>
    );
}