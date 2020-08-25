import React, {useState, useEffect} from 'react';

import { makeStyles, Grid, Typography } from '@material-ui/core';

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

const itemsInDB = [
    {
        id: 5,
        name: "Ladrillo Hueco",
        shortDescription: "8x18x25cm",
        image: "https://media.easy.com.ar/is/image/EasyArg/1013662-1",
        price: 25.56,
    },
    {
        id: 8,
        name: "Ladrillo Hueco 12x18x33cm",
        shortDescription: "",
        image: "https://media.easy.com.ar/is/image/EasyArg/1006902-1",
        price: 9.99,
    },
    {
        id: 2,
        name: "Ladrillo Portante",
        shortDescription: "18x25x33cm",
        image: "https://media.easy.com.ar/is/image/EasyArg/1169417-1",
        price: 80.12,
    },
    {
        id: 3,
        name: "Ladrillo Portante",
        shortDescription: "12x25x33cm",
        image: "https://media.easy.com.ar/is/image/EasyArg/1169416-1",
        price: 64.99,
    },
    {
        id: 6,
        name: "Ladrillo Portante 12x19x30cm",
        shortDescription: "",
        image: "https://media.easy.com.ar/is/image/EasyArg/1975902-1",
        price: 49.99,
    },
    {
        id: 1,
        name: "Ladrillo Normal",
        shortDescription: "",
        image: "https://media.easy.com.ar/is/image/EasyArg/1133380-1",
        price: 16.87,
    },
    {
        id: 7,
        name: "Bovedilla Común",
        shortDescription: "",
        image: "https://media.easy.com.ar/is/image/EasyArg/1528602",
        price: 9.99,
    },
];

export default function Main() {
    const classes = useStyles();
    
    const [items, setItems] = useState([]);
    const [isFetchingItems, setIsFetchingItems] = useState(true);
    
    const fetchItems = async () => {
        setTimeout(() => {
            setItems(itemsInDB); 
            setIsFetchingItems(false);
        }, 2000);
    };

    useEffect(() => {
        fetchItems();
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
                {isFetchingItems ? <Loading /> : items.map(( {id, name, shortDescription, image, price} )=>(
                    <Item className={classes.item} key={id} name={name} description={shortDescription} image={image} price={price} />
                ))}
            </Grid>
        </div>
        </>
    );
}