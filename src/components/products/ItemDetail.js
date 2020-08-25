import React from 'react';

import { makeStyles, Grid, Typography, Paper, Button } from '@material-ui/core';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import ItemCount from './ItemCount';

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
    bottomContainer: {
    },
    paperBottom: {
    },
    itemImg: {
        maxWidth: '100%',
        maxHeight: 400,
    },
    itemName:{
        padding: theme.spacing(1),
    },
    description: {
        textAlign: 'center',
        padding: theme.spacing(1),
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
    buyButtonLeftIcon: {
        marginRight: theme.spacing(5),
    },
    buyButtonRightIcon: {
        marginLeft: theme.spacing(5),
    },
}));

export default function Main({item}) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid className={classes.gridContainer} container spacing={1}>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper} elevation={3}>
                    <   img src={item.image} className={classes.itemImg} alt={"Imagen de " + item.name} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} className={classes.bottomContainer} >
                    <div className={classes.paper} elevation={3}>
                        <Typography className={classes.itemName} variant="h4" component="h2">
                            {item.name}
                        </Typography>
                        <Typography className={classes.itemName} variant="subtitle1" component="div">
                            {item.shortSpecs}
                        </Typography>
                    </div>
                    <Paper className={classes.paperBottom} elevation={3}>
                        <ItemCount initialValue={item.minProducts} minValue={item.minProducts} maxValue={item.maxProducts} onAddedToCartTrigger={(q) => alert(q)} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} className={classes.description}>
                    <Typography className={classes.itemDescriptionTitle} variant="h5" component="h3">
                        Descipción del producto
                    </Typography>
                    {item.description}
                </Grid>
                <Grid item xs={12} md={4} className={classes.buyContainer}>
                    <Button className={classes.buyButton} variant="contained" color="primary" 
                        startIcon={<ShoppingBasketIcon className={classes.buyButtonLeftIcon} />} 
                        endIcon={<ShoppingBasketIcon className={classes.buyButtonRightIcon} />}
                    >
                        Comprar
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}