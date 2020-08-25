import React, { useState } from 'react';

import { Typography, makeStyles, Button, Slider, TextField, fade } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './ItemCount.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(2),
    },
    quantityMinMax: {
        display: "flex",
        justifyContent: "space-between",
        color: "#0DC143",
    },
    min: {
        marginRight: theme.spacing(2),
    },
    max: {
        marginLeft: theme.spacing(2),
    },
    inputQuantity: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: -30,
        textAlign: 'center',
        maxWidth: 60,
    },
    slider: {
        display: "block",
        maxWidth: "90%",
        marginTop: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
    },
    addToCartButton: {
        marginTop: theme.spacing(2),
        '&:hover':{
        },
    },
}));

const rawClasses = {
    center: {
        textAlign: "center",
    },
};

export default function Main({ initialValue, minValue, maxValue, onAddedToCartTrigger }) {
    const [quantity, setQuantity] = useState(initialValue);

    const classes = useStyles();

    const handleSliderChange = (event, newValue) => {
        setQuantity(newValue);
    };

    const handleInputChange = (event) => {
        setQuantity(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (quantity < minValue) {
            setQuantity(minValue);
        } else if (quantity > maxValue) {
            setQuantity(maxValue);
        }
    };

    const onAddedToCart = () => {
        onAddedToCartTrigger(quantity);
    };

    return (
        <div className={classes.container}>
            <Typography className={classes.quantityMinMax} variant="caption" component="div">
                <span className={classes.min}>Min: {minValue}</span>
                <span className={classes.max}>Max: {maxValue}</span>
            </Typography>
            <TextField
                className={classes.inputQuantity}
                inputProps={{
                    style: rawClasses.center,
                    step: 1,
                    min: minValue,
                    max: maxValue,
                    type: "number",
                }}
                onBlur={handleBlur}
                value={quantity}
                onChange={handleInputChange}
            />
            <Slider
                className={classes.slider}
                value={typeof quantity === 'number' ? quantity : 0}
                min={minValue}
                max={maxValue}
                step={1}
                valueLabelDisplay="auto"
                onChange={handleSliderChange}
            />
            <Button className={classes.addToCartButton} variant="outlined" color="primary" onClick={onAddedToCart} startIcon={<ShoppingCartIcon />} endIcon={<ShoppingCartIcon />}>Al carrito</Button>
        </div>
    );

}