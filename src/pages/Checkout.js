import React from 'react';
import { Redirect } from 'react-router-dom'; 

import { makeStyles, Grid, Typography, Container, Button, TextField } from '@material-ui/core';

import {useCartContext} from '../contexts/cartContext';
import {createNewBuyOrder} from '../services/firebase/firestoreService';

const useStyles = makeStyles((theme) => ({
    title:{
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    sendOrderButton: {
        marginTop: theme.spacing(5),
    },
}));

export default function Main(){
    const { cart, totalCartPrice, isCartEmpty, deleteAllCartItems } = useCartContext();
    
    const classes = useStyles();
    const [orderShipped, setOrderShipped] = React.useState(false);
    const [orderID, setOrderID] = React.useState("");
    
    // Pendiente mejora de la implementación de formularios
    const [nombres, setNombres] = React.useState("");
    const [apellidos, setApellidos] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [verificationEmail, setVerificationEmail] = React.useState("");
    const [telefono, setTelefono] = React.useState("");
    
    if(isCartEmpty()){
        return(
            <Redirect to="/" />
        );
    }

    const isOrderReady = () => email === verificationEmail && email && apellidos && nombres && telefono;

    const onOrderSent = () => {
        const buyer = {
            name: nombres,
            surname: apellidos,
            email: email,
            phone: telefono,
        };

        const items = [
            ...cart.items.map((item) => ({id: item.id, quantity: item.quantity})),
        ];
        
        const onRequestCompleted = (order) => {
            setOrderShipped(true);
            setOrderID(order);

            setTimeout(() => {
                // Cuando el carrito está vacio, automaticamente se redirecciona a la página principal
                deleteAllCartItems();
            }, 15000);      
        };

        // Pendiente mejora del context de la app, para no redundar en los cálculos totales de los artículos
        createNewBuyOrder(buyer, items, totalCartPrice(), onRequestCompleted);
    };

    return (
        <>
        { !orderShipped ? 
        <Container maxWidth="md">
            <Typography className={classes.title} variant="h4" component="h1" color="initial">Finalizar Compra - Generación de orden</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="nombres" type="text" value={nombres} onChange={(event) => setNombres(event.target.value)}
                        label="Nombres"
                        variant="outlined" fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="apellidos" type="text" value={apellidos} onChange={(event) => setApellidos(event.target.value)}
                        label="Apellidos"
                        variant="outlined" fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}
                        label="E-Mail"
                        variant="outlined" fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="email" type="text" value={verificationEmail} onChange={(event) => setVerificationEmail(event.target.value)}
                        label="E-Mail"
                        variant="outlined" fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        name="telefono" type="number" value={telefono} onChange={(event) => setTelefono(event.target.value)}
                        label="Teléfono"
                        variant="outlined" fullWidth
                    />
                </Grid>
                {!isOrderReady() ? <> <br />El correo debe ser el mismo y todos los datos son obligatorios.</> : <><br />¡Puedes pedir tu orden!</>}
            </Grid>
            <Button className={classes.sendOrderButton} variant="contained" color="primary" fullWidth onClick={onOrderSent} disabled={!isOrderReady()}>enviar orden</Button>
        </Container>
        : <> ¡Orden enviada exitosamente! <br /><br /> Tu ID de orden es: {orderID} <br /><br /> Redireccionandote al inicio en 15 segundos... </>}
        </>
    );
}