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
        return cart.items.length <= 0;
    }

    function totalCartPrice () {
        const reducer = (accumulator, currentItem) => 
            accumulator + currentItem.quantity * currentItem.price;
   
        const price = cart.items.reduce(reducer, 0);

        return price.toLocaleString();
    };

    // TODO: OPTIMIZAR CODIGO de modifyitemquantity y addItem, son redundandtes, mal planteadas las funciones

    function modifyItemQuantity(itemId, quantity){
        const { itemExists, existingItem, cartItemsWithoutThisItem } = checkIfCartItemExists(itemId);
        
        if(itemExists){
            let newItemQuantity = quantity;
            let newTotalItemQuantity = cart.totalItemQuantity - existingItem[0].quantity;

            if (newItemQuantity > existingItem[0].maxProducts) {
                newItemQuantity = existingItem[0].maxProducts;
            }
            
            if (newItemQuantity < existingItem[0].minProducts) {
                newItemQuantity = existingItem[0].minProducts;
            }

            const newCart = {
                totalItemQuantity: newTotalItemQuantity + newItemQuantity,
                items: [
                    ...cartItemsWithoutThisItem,
                    {
                        ...existingItem[0],
                        quantity: newItemQuantity,
                    },
                ],
            };
            setCart(newCart);
        }
    }
    
    function addItem(newItem) {
        const { itemExists, existingItem, cartItemsWithoutThisItem } = checkIfCartItemExists(newItem.id);

        let cartItems = cart.items;
        let newItemQuantity = newItem.quantity;
        let newTotalItemQuantity = cart.totalItemQuantity;
        let itemOrder = cart.items.length + 1;

        if(itemExists){
            cartItems = cartItemsWithoutThisItem;
            newItemQuantity += existingItem[0].quantity;
            newTotalItemQuantity -= existingItem[0].quantity;
            itemOrder = existingItem[0].order;
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
                ...cartItems, 
                {
                    ...newItem,
                    order: itemOrder,
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
        <CartContext.Provider value={{ cart, addItem, modifyItemQuantity, deleteCartItem, deleteAllCartItems, isCartEmpty, totalCartPrice }}>
            {children}
        </CartContext.Provider>
    );
};

