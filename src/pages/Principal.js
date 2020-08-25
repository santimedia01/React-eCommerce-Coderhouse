import React from 'react';
//import ItemList from '../components/products/ItemList'
import ItemDetailContainer from '../components/products/ItemDetailContainer'

export default function Main() {
    return(
        <ItemDetailContainer />
        /* <></> */
        /*  <ItemList /> */
        /* <ItemCount initialValue={1} minValue={1} maxValue={15} onAddedToCartTrigger={(quantity) => alert("Se agregaron " + quantity + " productos al carrito.")} /> */
    );
}