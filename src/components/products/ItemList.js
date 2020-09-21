import React, {useState, useEffect} from 'react';

import { makeStyles, Grid, Typography } from '@material-ui/core';

import {getFirestore} from '../../services/firebase/firebaseConfig';

import Loading from '../common/loading/Loading';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
    sectionTitles:{
        textAlign: "center",
        margin: theme.spacing(2),
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxHeight: 350,
    },
    item: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function Main() {
    const classes = useStyles();
    
    const [items, setItems] = useState([]);
    const [isFetchingItems, setIsFetchingItems] = useState(true);
    
    React.useEffect(() => {
        const db = getFirestore();
        const categoryDbRef = db.collection('categorias').doc('AqS5ogwezOhZzrLYE5f4');
        const requestedItem = db.collection('productos').where('category', '==', categoryDbRef).get();
        
        requestedItem.then((querySnapshot) => {
            if(querySnapshot.size > 0) {
                setItems(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
                setIsFetchingItems(false);
            }
        }).catch(() => {
            
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return(
        <>
        <Typography className={classes.sectionTitles} variant="h5" component="div">Ladrillos</Typography>
        <div className={classes.container}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {isFetchingItems ? <Loading /> : items.map(( {id, name, shortSpecs, image, price, uniqueProductUrlName} )=>(
                    <Item className={classes.item} key={id} name={name} description={shortSpecs} image={image} price={price} uniqueProductUrlName={uniqueProductUrlName} />
                ))}
            </Grid>
        </div>
        </>
    );
}