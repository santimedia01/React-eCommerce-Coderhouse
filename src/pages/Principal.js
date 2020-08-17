import React from 'react';
import ItemCount from '../components/products/ItemCount'


export default function Main() {
    return(
        <ItemCount itemName="Buzo con capucha con diseño llamarada" initial={Number(1)} min={Number(1)} max={Number(15)} onAdd={(quantity) => alert("Se agregaron " + quantity + " productos al carrito.")} />
    );
}