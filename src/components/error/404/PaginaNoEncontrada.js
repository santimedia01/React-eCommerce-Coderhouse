import React from 'react';
import {Link} from 'react-router-dom'

import { Typography, Button, makeStyles } from '@material-ui/core';

import Imagen404 from './img/404.png';

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    subTitle: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginBottom: theme.spacing(3),
    },
    textDecorationNone:{
        textDecoration: 'none',
        color: 'inherit',
    },
}));

export default function PaginaNoEncontrada ({productNotFound = false, categoryNotFoundOrHasNoneItems = false}) {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Typography className={classes.title} variant="h3" component="h1">¡Buscamos! <br /> pero <br /> sin éxito</Typography>
            {productNotFound ? 
                <Typography className={classes.subTitle} variant="h4" component="h2">Producto no encontrado</Typography> : ''
            }
            {categoryNotFoundOrHasNoneItems ? 
                <Typography className={classes.subTitle} variant="h4" component="h2">Categoría no encontrada o no quedan productos</Typography> : ''
            }
            <Link to="/" className={classes.textDecorationNone}>
                <Button className={classes.button} variant="outlined" color="primary" href="/" component="div">Volver a la Página Principal</Button>
            </Link>
            <br />
            <img className={classes.img} src={Imagen404} width="300px" height="300px" alt="Representación ilustrada del error 404" />
        </div>
    );
}