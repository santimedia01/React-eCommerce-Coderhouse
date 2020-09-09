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
        paddingLeft: theme.spacing(1),
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
}));

export default function Main() {
    const classes = useStyles();
    const { isCartEmpty, cart, deleteAllCartItems } = useCartContext();

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

    return(
        <Container maxWidth="md" className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography className={classes.info} variant="h5" component="h1">
                    <span className={classes.title}><strong>Carrito de compras</strong></span>
                    <div className={classes.quantities} variant="subtitle1">Total items: {cart.totalItemQuantity}</div>
                    <div className={classes.quantities} variant="subtitle1">Total precio: X</div>
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
                    cart.items.map((item) => <CartItem key={item.id} item={item} />)
                }
            </List>
                    
            
        </Container>
    );
}