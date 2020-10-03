import React from 'react';
import {useParams} from 'react-router-dom';

import {getItemByUrlName} from '../services/firebase/firestoreService';

import ItemDetail from '../components/products/ItemDetail';
import PaginaNoEncontrada from '../components/error/404/PaginaNoEncontrada';
import Loading from '../components/common/loading/Loading';

export default function Main() {
    const {id} = useParams();
    //TODO: isFetchingItem con el mockup gris de cosas cargando de material UI
    const [currentItem, setCurrentItem] = React.useState([]);
    const [itemNotFound, setItemNotFound] = React.useState(false);

    React.useEffect(() => {
        setCurrentItem([]);
        setItemNotFound(false);
        getItemByUrlName(id, setCurrentItem, setItemNotFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return(
        <>
            {currentItem.length > 0 ? <ItemDetail item={currentItem[0]} /> : itemNotFound ? <PaginaNoEncontrada productNotFound/> : <Loading /> }
        </>
    );
}