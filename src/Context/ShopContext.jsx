import React, { createContext } from "react";
import all_product from '../assets/all_product'
import { useState } from "react";


export const ShopContext = createContext({ all_product: [] })

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const AddtoCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }

    const RemoveCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        } 
        return totalAmount;
    }

    const getTotalCartitems = () => {
        let totalCart = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCart += cartItems[item];
            }
        }
        return totalCart;
    }
    const contextValue = { all_product, cartItems, AddtoCart, RemoveCart, getTotalAmount, getTotalCartitems }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

