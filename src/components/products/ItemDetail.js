import React, {useState} from 'react';

import { makeStyles, Grid, Typography, Paper, Button } from '@material-ui/core';

import ItemCount from './ItemCount/ItemCount';

import {useCartContext} from '../../contexts/cartContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer: {
        margin: 0,
        width: '100% !important',
    },
    paper: {
        display: 'relative',
        margin: theme.spacing(2),
        textAlign: 'center',
    },
    paperBottom: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.only('sm')]: {
            marginLeft: theme.spacing(6),
            marginRight: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(-1.8),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(3.1),
        },
    },
    itemImg: {
        maxWidth: '100%',
        maxHeight: 400,
    },
    productName:{
        padding: theme.spacing(1),
        minHeight: 98,
    },
    paddingTop:{
        padding: theme.spacing(1),
    },
    description: {
        textAlign: 'center',
        padding: theme.spacing(3) + 'px !important',
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5) + "px !important",
            paddingTop: theme.spacing(1) + "px !important",
            textAlign: 'left',
        },
    },
    itemDescriptionTitle:{
        marginBottom: theme.spacing(2),
    },
    buyContainer:{
        display: 'flex',
        justifyContent: 'center',
    },
    buyButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: "80%",
        maxHeight: 36,
    },
}));

export default function Main({ item }) {
    const { id, name, price, shortSpecs, description, image, minProducts, maxProducts } = item;
    const [quantity, setQuantity] = useState(minProducts);
    const {addItem, deleteCartItem} = useCartContext();
    const classes = useStyles();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const onQuantityChange = (quantityItemCount) => {
        setQuantity(quantityItemCount);
    };

    const onAddedToCart = (itemNewQuantity) => {
        addItem({
            ...item,
            quantity: itemNewQuantity,
        });
    };

    const onDeletedFromCart = () => {
        deleteCartItem(id);
    };

    return(
        <div className={classes.root}>
            <Grid className={classes.gridContainer} container spacing={1}>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper} elevation={3}>
                        <img src={image} className={classes.itemImg} alt={"Imagen de " + name} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.paper} elevation={3}>
                        <Typography className={classes.productName} variant="h4" component="h2">
                            {name}
                        </Typography>
                        <Typography className={classes.paddingTop} variant="subtitle1" component="div">
                            {shortSpecs}
                        </Typography>
                        <Typography className={classes.paddingTop} variant="subtitle1" component="div">
                            Precio Unitario
                            <br />
                            <strong>{price}</strong>
                        </Typography>
                    </div>
                    <Paper className={classes.paperBottom} elevation={3}>
                        <ItemCount initialValue={minProducts} minValue={minProducts} maxValue={maxProducts} 
                            onQuantityChange={onQuantityChange} onCartItemAdded={onAddedToCart} onCartItemDeleted={onDeletedFromCart}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} className={classes.description}>
                    <Typography className={classes.itemDescriptionTitle} variant="h5" component="h3">
                        Descipción del producto
                    </Typography>
                    {description}
                </Grid>
                <Grid item xs={12} md={4} className={classes.buyContainer}>
                    <Button className={classes.buyButton} variant="contained" color="primary">
                        Comprar {quantity}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}