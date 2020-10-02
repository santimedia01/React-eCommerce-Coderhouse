import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth: 245,
        height: 400,
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
    textDecorationNone:{
        textDecoration: 'none',
        color: 'inherit',
    },
}));

export default function Main({className, image, name, description, price, uniqueProductUrlName}) {
    const classes = useStyles();

    return(
        <div className={className}>
            <Card className={classes.root}>
                <Link to={"/productos/"+uniqueProductUrlName} className={classes.textDecorationNone}>
                    <CardActionArea>
                        <CardMedia component="img" image={image} alt={name} title={name} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions className={classes.cardActions}>
                    <Typography variant="subtitle1" color="textPrimary" component="p">${price}</Typography>
                    <Button className={classes.linkToItemPage} size="small" color="primary"><Link to={"/productos/"+uniqueProductUrlName} className={classes.textDecorationNone}>Ver producto</Link></Button>
                </CardActions>
            </Card>
        </div>
    );
}