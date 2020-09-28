import React, {useState, useEffect, createContext, useContext} from 'react';

const emptyCart = {
    totalItemQuantity: 0,
    items: [],
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
        return cart.totalItemQuantity === 0;
    }

    function totalCartPrice () {
        const reducer = (accumulator, currentItem) => 
            accumulator + currentItem.quantity * currentItem.price;

        const price = cart.items.reduce(reducer, 0);
        return price;
    };

    function addItem(newItem){
        const { id, quantity, minProducts, maxProducts } = newItem;
        const { itemExists, existingItem, cartItemsWithoutThisItem } = checkIfCartItemExists(id);

        let cartItems = cartItemsWithoutThisItem;
        let newItemQuantity = quantity;
        let itemOrder = cart.items.length + 1;
        let totalItemQuantity = cart.totalItemQuantity;
        
        if(itemExists){
            totalItemQuantity -= existingItem[0].quantity;
            itemOrder = existingItem[0].order;
        }

        if (newItemQuantity > maxProducts) {
            newItemQuantity = maxProducts;
        }
        if (newItemQuantity < minProducts) {
            newItemQuantity = minProducts;
        }
        
        const newCart = {
            totalItemQuantity: totalItemQuantity + newItemQuantity,
            items: [
                ...cartItems, 
                {
                    ...newItem,
                    order: itemOrder,
                    quantity: newItemQuantity,
                },
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
        <CartContext.Provider value={{ cart, addItem, checkIfCartItemExists, deleteCartItem, deleteAllCartItems, isCartEmpty, totalCartPrice }}>
            {children}
        </CartContext.Provider>
    );
};

