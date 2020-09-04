import React, {useState, createContext, useContext} from 'react';

const emptyCart = {
    totalItemQuantity: 0,
    items: [],
};

export const CartContext = createContext(emptyCart);
export const useCartContext = () => useContext(CartContext);

export function CartProvider ({initialValue = emptyCart, children}){
    const [cart, setCart] = useState(initialValue);

    function addItem(newItem) {
        const newCart = {
            totalItemQuantity: cart.totalItemQuantity + newItem.quantity,
            items: [...cart.items, newItem],
        };
        setCart(newCart);
    }

    function deleteCartItems(){
        setCart(emptyCart);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, deleteCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

