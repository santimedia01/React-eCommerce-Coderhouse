import React, {useState, useEffect} from 'react';

import ItemDetail from './ItemDetail';
import Loading from '../common/loading/Loading';


const itemInDB = {
    id: 7,
    name: "Bovedilla Común",
    shortSpecs: "(25x12x8cm)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
    image: "https://media.easy.com.ar/is/image/EasyArg/1528602",
    price: 9.99,
    minProducts: 1,
    maxProducts: 3500,
};

export default function Main() {
    const [item, setItem] = useState([]);
    const [isFetchingItem, setIsFetchingItem] = useState(true);
    
    const fetchItems = async () => {
        setTimeout(() => {
            setItem(itemInDB); 
            setIsFetchingItem(false);
        }, 3000);
    };

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            {isFetchingItem ? <Loading /> : <ItemDetail item={item} />}
        </>
    );
}