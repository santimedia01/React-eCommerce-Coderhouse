import React from 'react';

import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth: 245,
        height: 380,
        position: "relative",
    },
    media:{
    },
    cardActions: {
        position: "absolute",  
        bottom: 0,
        width: "94%",
        justifyContent: "space-between",   
    },
    linkToItemPage: {
    },
}));

export default function Main(props) {
    const classes = useStyles();

    return(
        <div className={props.className}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" image={props.image} alt={props.name} title={props.name} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Typography variant="subtitle1" color="textPrimary" component="p">${props.price}</Typography>
                    <Button className={classes.linkToItemPage} size="small" color="primary">Ver producto</Button>
                </CardActions>
            </Card>
        </div>
    );
}