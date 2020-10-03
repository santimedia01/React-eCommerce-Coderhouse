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
    const [itemNotFound, setItemNotFound] = React.useState(false);
    //TODO: isFetchingItem con el mockup gris de cosas cargando de material UI

    React.useEffect(() => {
        setItems([]);
        setItemNotFound(false);
        getItemsByCategory(name, setItems, setItemNotFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return(
        <>
            { items.length > 0 ? 
                <>
                    <Typography style={classes.categorieTitle} variant="h4" color="initial">Categoría: {name}</Typography>
                    <ItemList items={items} /> 
                </>
            : itemNotFound ? <PaginaNoEncontrada categoryNotFoundOrHasNoneItems/> :  <Loading />}
        </>
    );
}
