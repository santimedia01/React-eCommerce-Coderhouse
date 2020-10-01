import React from 'react';

import { makeStyles, Grid } from '@material-ui/core';

import Item from './Item';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxHeight: 350,
    },
    item: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function Main({items}) {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {items.map(( {id, name, shortSpecs, image, price, uniqueProductUrlName} ) => (
                    <Item className={classes.item} key={id} name={name} description={shortSpecs} image={image} price={price} uniqueProductUrlName={uniqueProductUrlName} />
                ))}
            </Grid>
        </div>
    );
}