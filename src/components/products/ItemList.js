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
        shortSpecs: "8x18x25cm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1013662-1",
        price: 25.56,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 8,
        name: "Ladrillo Hueco 12x18x33cm",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1006902-1",
        price: 9.99,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 2,
        name: "Ladrillo Portante",
        shortSpecs: "18x25x33cm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1169417-1",
        price: 80.12,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 3,
        name: "Ladrillo Portante",
        shortSpecs: "12x25x33cm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1169416-1",
        price: 64.99,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 6,
        name: "Ladrillo Portante 12x19x30cm",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1975902-1",
        price: 49.99,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 1,
        name: "Ladrillo Normal",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1133380-1",
        price: 16.87,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 7,
        name: "Bovedilla Común",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1528602",
        price: 9.99,
        minProducts: 1,
        maxProducts: 3500,
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
        }, 500);
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
                {isFetchingItems ? <Loading /> : items.map(( {id, name, shortSpecs, image, price} )=>(
                    <Item className={classes.item} key={id} id={id} name={name} description={shortSpecs} image={image} price={price} />
                ))}
            </Grid>
        </div>
        </>
    );
}