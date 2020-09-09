import React, {useState, useEffect, createContext, useContext} from 'react';

const emptyCart = {
    //totalItemQuantity: 2500 + 2000 + 1899,
    totalItemQuantity: 0,
    //totalPrice: 0,
    items: [
        /*
        {
            id: 8,
            name: "Ladrillo Hueco 12x18x33cm",
            shortSpecs: "",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur deleniti repellendus sed quos voluptates iste tenetur, quam, beatae fugit esse soluta perferendis. Reiciendis voluptas aliquam in excepturi doloribus asperiores!",
            image: "https://media.easy.com.ar/is/image/EasyArg/1006902-1",
            price: 9.99,
            quantity: 2500,
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
            quantity: 2000,
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
            quantity: 1899,
            minProducts: 1,
            maxProducts: 3500,
        },
        */
    ],
};

export const CartContext = createContext(emptyCart);
export const useCartContext = () => useContext(CartContext);

export function CartProvider ({initialValue = emptyCart, children}){
    const [cart, setCart] = useState(initialValue);

    useEffect(() => {
        // Get from Database if is an autenticated user
        // Get from LocalStorage
    }, []);

    useEffect(() => {
        // Save only id's in Database if is an autenticated user
        // Save only id's in LocalStorage
    }, [cart]);
    
    function checkIfCartItemExists (itemId){
        const existingItem = cart.items.filter(item => item.id === itemId);
        const itemExists = existingItem.length > 0;
        const cartItemsWithoutThisItem = cart.items.filter(item => item.id !== itemId);
        return { itemExists, existingItem, cartItemsWithoutThisItem };
    }

    function isCartEmpty (){
        return cart.items.length <= 0;
    }

    function modifyItemQuantity(itemId, quantity){
        const { itemExists, existingItem, cartItemsWithoutThisItem } = checkIfCartItemExists(itemId);
        
        if(itemExists){
            let newItemQuantity = quantity;
            let newTotalItemQuantity = cart.totalItemQuantity - existingItem.quantity;
            
            if (existingItem.quantity > existingItem.maxProducts) {
                newItemQuantity = existingItem.maxProducts;
            }

            if (existingItem.quantity < existingItem.minProducts) {
                newItemQuantity = existingItem.minProducts;
            }

            const newCart = {
                totalItemQuantity: newTotalItemQuantity + newItemQuantity,
                items: [
                    ...cartItemsWithoutThisItem, 
                    {
                        ...existingItem,
                        quantity: newItemQuantity,
                    }
                ],
            };
            setCart(newCart);
        }
    }
    
    function addItem(newItem) {
        const { itemExists, existingItem, cartItemsWithoutThisItem } = checkIfCartItemExists(newItem.id);

        let newCartItems = cart.items;
        let newItemQuantity = newItem.quantity;
        let newTotalItemQuantity = cart.totalItemQuantity;
        
        if(itemExists){
            newCartItems = cartItemsWithoutThisItem;
            newItemQuantity += existingItem[0].quantity;
            newTotalItemQuantity -= existingItem[0].quantity;
        }

        if (newItemQuantity > newItem.maxProducts) {
            newItemQuantity = newItem.maxProducts;
        }
        if (newItemQuantity < newItem.minProducts) {
            newItemQuantity = newItem.minProducts;
        }

        const newCart = {
            totalItemQuantity: newTotalItemQuantity + newItemQuantity,
            items: [
                ...newCartItems, 
                {
                    ...newItem,
                    quantity: newItemQuantity,
                }
            ],
        };
        setCart(newCart);
    }

    function deleteCartItem(toDeleteItemId){
        const { itemExists, existingItem, cartItemsWithoutThisItem } = checkIfCartItemExists(toDeleteItemId);

        if(itemExists){
            setCart({
                totalItemQuantity: cart.totalItemQuantity - existingItem[0].quantity,
                items: [...cartItemsWithoutThisItem],
            });
        }
    }

    function deleteAllCartItems(){
        setCart(emptyCart);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, modifyItemQuantity, deleteCartItem, deleteAllCartItems, isCartEmpty }}>
            {children}
        </CartContext.Provider>
    );
};

