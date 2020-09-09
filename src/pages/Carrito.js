import React from 'react';
import {Link} from 'react-router-dom';

import { List, Button,Typography, makeStyles, Container, Paper } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {useCartContext} from '../contexts/cartContext';

import CartItem from '../components/cart/CartItem';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2),
    },
    titleContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
    },
    info: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    title: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'inline',
        },
    },
    quantities: {
        display: 'inline-flex',
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(3),
        },
        fontSize: 16,
    },
    deleteCartButton: {
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 50,
        [theme.breakpoints.up('xs')]: {
            marginLeft: theme.spacing(1.5),
        },
    },
    emptyCartPaper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(3),
    },
    textDecorationNone:{
        textDecoration: 'none',
        color: 'inherit',
    },
    total: {
        marginTop: theme.spacing(3),
        textAlign: 'right',
    },
    toCheckoutButton: {
        marginTop: theme.spacing(2),
    },
}));

export default function Main() {
    const classes = useStyles();
    const { cart, deleteAllCartItems, totalCartPrice, isCartEmpty } = useCartContext();

    const onCartDelete = () => deleteAllCartItems();

    const renderEmptyCartInfo = (
        <Paper elevation={5} className={classes.emptyCartPaper}>
            ¡El carrito está vacío!
            <br /> <br />
            <Link to="/" className={classes.textDecorationNone}>
                <Button variant="outlined" color="primary" href="/" component="div">Volver a la Página Principal</Button>
            </Link>
        </Paper>
    );

    

    const renderTotalPrice = (
        <div className={classes.total}>
            <Typography variant="h6" color="primary">Total: $<strong>{totalCartPrice()}</strong></Typography>
            <Button className={classes.toCheckoutButton} variant="contained" size="small" color="primary">Proceder al Checkout</Button>
        </div>
    );

    return(
        <Container maxWidth="md" className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography className={classes.info} variant="h5" component="h1">
                    <span className={classes.title}><strong>Carrito de compras</strong></span>
                    <div className={classes.quantities} variant="subtitle1">Total items: {cart.totalItemQuantity}</div>
                </Typography>
                <Button className={classes.deleteCartButton} variant="outlined" color="secondary" endIcon={<DeleteForeverIcon />}
                    onClick={onCartDelete}
                >
                    Borrar carrito
                </Button>
            </div>

            <List>
                {
                    isCartEmpty() ? renderEmptyCartInfo :
                    <>
                        { cart.items.sort((item, nextItem) => item.order - nextItem.order).map((item) => <CartItem key={item.id} item={item} />) }
                        { renderTotalPrice }
                    </>
                }
            </List>
            
        </Container>
    );
}