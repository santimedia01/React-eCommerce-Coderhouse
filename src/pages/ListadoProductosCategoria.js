import React from 'react';
import {useParams} from 'react-router-dom';

import {getItemsByCategory} from '../services/firebase/firestoreService';

import ItemList from '../components/products/ItemList';
import PaginaNoEncontrada from '../components/error/404/PaginaNoEncontrada';

export default function Main() {
    const {name} = useParams();
    const [items, setItems] = React.useState([]);
    //TODO: isFetchingItem con el mockup gris de cosas cargando de material UI
    
    React.useEffect(() => {
        getItemsByCategory(name, setItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return(
        <>
            {items.length > 0 ? <ItemList items={items} /> : <PaginaNoEncontrada  categoryNotFoundOrHasNoneItems/>}
        </>
    );
}
