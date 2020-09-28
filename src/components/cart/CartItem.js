import React from 'react';

import { TextField, ListItem, IconButton, Typography,makeStyles, Paper, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import {useCartContext} from '../../contexts/cartContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: theme.spacing(2),
    },
    itemCartProduct: {
    },
    image: {
        display: 'block', 
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 80,
    },
    titleAndDescription: {
        [theme.breakpoints.down('sm')]: {
            borderLeft: '2px solid ' + theme.palette.divider,
            paddingLeft: theme.spacing(2),
        },
    },
    itemCartCountContainer: {
        borderLeft: '2px solid ' + theme.palette.divider,
        maxWidth: 150,
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(1),
        },
        [theme.breakpoints.only('sm')]: {
            borderLeft: 'none',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    deleteItemButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemPriceContainer: {
        borderLeft: '2px solid ' + theme.palette.divider,
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.only('sm')]: {
            paddingTop: theme.spacing(2.5),
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 0,
        },
    },
    price: {
        fontWeight: 'bold',
    },
    totalItemPrice: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(0.6),
        },
    },
    itemCountInputs:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    remove: {
    },
    inputField: {
        textAlign: 'center',
    },
    add: {
    },
}));

const rawClasses = {
    textAlignCenter:{
        textAlign: 'center',
        width: 80,
    },
}

export default function Main({item}) {
    const { id, name, price, shortSpecs, image, quantity, minProducts, maxProducts } = item;

    const classes = useStyles();

    const [inputsQuantity, setInputsQuantity] = React.useState(quantity);
    const { deleteCartItem, addItem } = useCartContext();

    React.useEffect(() => {
        addItem({...item, quantity: inputsQuantity});

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputsQuantity]);

    const handleBlur = () => {
        if (inputsQuantity < minProducts) {
            setInputsQuantity(minProducts);
        } else if (inputsQuantity > maxProducts) {
            setInputsQuantity(maxProducts);
        }
    };

    const handleInputChange = (event) => {
        setInputsQuantity(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const onOneItemAdd = () => {
        setInputsQuantity(inputsQuantity + 1);
    };
    
    const onOneItemRemove = () => {
        setInputsQuantity(inputsQuantity - 1);
    };
    
    const onItemDelete = () => {
        deleteCartItem(id);
    };

    return(
        <Paper elevation={3} className={classes.paper}>
            <ListItem>
                <Grid container spacing={1}>
                    <Grid container item xs={11} className={classes.itemCartProduct}>
                        <Grid item xs={12} sm={5} md={2}>
                            <img className={classes.image} src={image} alt={`imagen del producto ${name}` } />
                        </Grid>

                        <Grid item xs={12} sm={7} md={4} className={classes.titleAndDescription}>
                            <Typography variant="h6">{name}</Typography>
                            <Typography variant="subtitle1">{shortSpecs}</Typography>
                        </Grid>

                        <Grid item xs={12} sm={5} md={3} className={classes.itemCartCountContainer}>
                            <div className={classes.itemCountInputs}>
                                <IconButton className={classes.remove} onClick={onOneItemRemove} disabled={inputsQuantity <= minProducts}>
                                    <RemoveIcon />
                                </IconButton>
                                <div className={classes.inputField}>
                                    <TextField className={classes.inputQuantity}
                                        inputProps={{
                                            style: rawClasses.textAlignCenter,
                                            step: 1,
                                            min: minProducts,
                                            max: maxProducts,
                                            type: "number",
                                        }}
                                        onBlur={handleBlur}
                                        value={inputsQuantity}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <IconButton className={classes.add} onClick={onOneItemAdd} disabled={inputsQuantity >= maxProducts}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={7} md={3} className={classes.itemPriceContainer}>
                            <span>
                                x <span className={classes.price}>${price}</span> c/u =  
                            </span>    
                            <span className={classes.totalItemPrice}>
                                ${ (quantity * price).toLocaleString() }
                            </span>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={1} className={classes.deleteItemButtonContainer}>
                        <IconButton color="secondary" onClick={onItemDelete}>
                            <DeleteIcon />
                        </IconButton>  
                    </Grid>
                </Grid>
            </ListItem>
        </Paper>
    );
}