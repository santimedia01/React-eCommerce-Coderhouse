import React from 'react';
import {useParams} from 'react-router-dom';

import { Typography } from '@material-ui/core';

import {getItemsByCategory} from '../services/firebase/firestoreService';

import ItemList from '../components/products/ItemList';
import PaginaNoEncontrada from '../components/error/404/PaginaNoEncontrada';
import Loading from '../components/common/loading/Loading';

const classes = {
    categorieTitle: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
};

export default function Main() {
    const {name} = useParams();
    const [items, setItems] = React.useState([]);
    const [isFetchingItems, setIsFetchingItems] = React.useState(true);
    //TODO: isFetchingItem con el mockup gris de cosas cargando de material UI

    React.useEffect(() => {
        getItemsByCategory(name, setItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    React.useEffect(() => {
        if (items !== []){
            setIsFetchingItems(false);
        }
    }, [items])

    return(
        <>
            { isFetchingItems ? <Loading /> : items.length > 0 ? 
                <>
                    <Typography style={classes.categorieTitle} variant="h4" color="initial">Categoría: {name}</Typography>
                    <ItemList items={items} /> 
                </>
            : <PaginaNoEncontrada  categoryNotFoundOrHasNoneItems/>}
        </>
    );
}
