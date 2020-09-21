import React from 'react';

import { makeStyles, Grid, Typography, Container, Button, TextField, setRef } from '@material-ui/core';

import {useCartContext} from '../contexts/cartContext';

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
    const classes = useStyles();
    const { cart, deleteAllCartItems, totalCartPrice, isCartEmpty } = useCartContext();

    const [orderShipped, setOrderShipped] = React.useState(false);

    // Pendiente mejora de implementación deformularios
    const [nombres, setNombres] = React.useState("");
    const [apellidos, setApellidos] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefono, setTelefono] = React.useState("");

    const onOrderSent = () => {
        const data = {
            buyer: {
                name: nombres,
                surname: apellidos,
                email: email,
                phone: telefono,
            },
            // Pendiente mejora del context de la app, para no redundar en los cálculos totales de los artículos
            items: [
                ...cart.items,
            ],
            date: "date",
        };
        
        setOrderShipped(true);        
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
                        name="telefono" type="number" value={telefono} onChange={(event) => setTelefono(event.target.value)}
                        label="Teléfono"
                        variant="outlined" fullWidth
                    />
                </Grid>
            </Grid>
            <Button className={classes.sendOrderButton} variant="contained" color="primary" fullWidth onClick={onOrderSent}>enviar orden</Button>
        </Container>
        : "¡Orden enviada exitosamente!"}
        </>
    );
}