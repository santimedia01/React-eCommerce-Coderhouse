import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import {getItemsByCategory} from '../services/firebase/firestoreService';

import ItemList from '../components/products/ItemList';
import Loading from '../components/common/loading/Loading';

const useStyles = makeStyles((theme) => ({
    sectionTitles:{
        textAlign: "center",
        margin: theme.spacing(2),
    },
}));

export default function Main() {
    const classes = useStyles();
    const [items, setItems] = React.useState([]);
    const [isFetchingItems, setIsFetchingItems] = React.useState(true);
    
    React.useEffect(() => { 
        getItemsByCategory("Ladrillos", setItems);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        setIsFetchingItems(false);
    }, [items]);

    return(
        <>
            <Typography className={classes.sectionTitles} variant="h5" component="div">Ladrillos</Typography>
            {isFetchingItems ? <Loading /> : <ItemList items={items} />}
        </>
    );
}