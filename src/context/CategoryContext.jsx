import { createContext, useState } from "react";
import allProduct from '../components/assets/all_product'

export const CategoryContext = createContext(null)

const getDefaultCart = () =>{
    let cart ={};
    for (let i=1 ; i<allProduct.length +1; i++ ){
        cart[i] = 0;
    }
    return cart;
} 

const CategoryContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] +1}))
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}))
    }
    
    const getTotalAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] >0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems ;
    }
    const deleteProduct = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : 0}))
    }
    const contextValue = {allProduct,cartItems,addToCart,removeFromCart,getTotalAmount,getTotalCartItems,deleteProduct}

    return (
        <CategoryContext.Provider value={contextValue}>
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoryContextProvider