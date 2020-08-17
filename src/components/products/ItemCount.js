import React, { useState } from 'react';
import { IconButton, makeStyles, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: 300,
        padding: theme.spacing(1),
        backgroundColor: "#F5F5F5",
        border: "2px solid #E7E7E7",
        borderRadius: 20,
    },
    quantityContainer:{
        display: "flex",
        justifyContent: "space-between",
    },
    quantity: {
        display: "flex",
        alignItems: "center",
    },
    addToCartButton: {
        marginTop: theme.spacing(2),
        width: "100%",
    },
}));

export default function Main(props) {
    const [quantity, setQuantity] = useState(props.initial);
    const classes = useStyles();
    
    const quantityRemove = () => {
        if (quantity - 1 >= props.min){
            setQuantity(quantity - 1);
        }
    };
    const quantityAdd = () => {
        if (quantity + 1 <= props.max){
            setQuantity(quantity + 1);
        }
    };

    const onAddedToCart = () => {
        props.onAdd(quantity);
    };

    return(
        <div className={classes.container}>
            <div className={classes.quantityContainer}>
                <IconButton onClick={quantityRemove}> <RemoveIcon /> </IconButton>
                <span className={classes.quantity}>{quantity}</span>
                <IconButton onClick={quantityAdd}> <AddIcon /> </IconButton>
            </div>
            <Button className={classes.addToCartButton} onClick={onAddedToCart} variant="contained" color="primary" endIcon={<ShoppingCartIcon>Agregar al carrito</ShoppingCartIcon>}>Al carrito</Button>
        </div>
    );

    /*
    const [quantity, setQuantity] = useState(props.initial);

    const classes = useStyles();

    const onQuantityChange = (e, value) => {
        setQuantity(value);
    };

    return(
        <div className={classes.container}>
            <Typography className={classes.infoQuantity} variant="caption" component="div">
                Min: {props.min}
                <Typography id="product-quantity-slider-x" className={classes.quantity} variant="subtitle1" component="div">{quantity}</Typography>
                Max: {props.max}
            </Typography>
            <Slider
                className={classes.slider}
                defaultValue={props.initial}
                aria-labelledby="product-quantity-slider-x"
                min={props.min}
                max={props.max}
                step={1}
                valueLabelDisplay="auto"
                marks
                onChange={onQuantityChange}
            />
            <Button className={classes.addToCartButton} variant="contained" color="primary" endIcon={<ShoppingCartIcon>Agregar al carrito</ShoppingCartIcon>}>Al carrito</Button>
        </div>
    );
    */
}