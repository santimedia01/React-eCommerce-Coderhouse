import React from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from '../components/products/ItemDetail';

const itemsInDB = [
    {
        id: 5,
        name: "Ladrillo Hueco",
        shortSpecs: "8x18x25cm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1013662-1",
        price: 25.56,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 8,
        name: "Ladrillo Hueco 12x18x33cm",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1006902-1",
        price: 9.99,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 2,
        name: "Ladrillo Portante",
        shortSpecs: "18x25x33cm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1169417-1",
        price: 80.12,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 3,
        name: "Ladrillo Portante",
        shortSpecs: "12x25x33cm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1169416-1",
        price: 64.99,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 6,
        name: "Ladrillo Portante 12x19x30cm",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1975902-1",
        price: 49.99,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 1,
        name: "Ladrillo Normal",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1133380-1",
        price: 16.87,
        minProducts: 1,
        maxProducts: 3500,
    },
    {
        id: 7,
        name: "Bovedilla Común",
        shortSpecs: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
        image: "https://media.easy.com.ar/is/image/EasyArg/1528602",
        price: 9.99,
        minProducts: 1,
        maxProducts: 3500,
    },
];

export default function Main() {
    const {id} = useParams();
    const actualItem = itemsInDB.filter(item => item.id === Number(id));
    
    return(
        <>
            {actualItem.length > 0 ? <ItemDetail item={actualItem[0]} /> : "No se encontró el item."}
        </>
    );
}