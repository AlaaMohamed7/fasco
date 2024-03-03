// import React, { createContext, useState } from "react";
// import all_product from "../components/assets/all_product";

// export const CartContext = createContext(null);

// const getDefaultCart = () =>{
//     let cart ={};
//     for (let i=1 ; i<all_product.length +1; i++ ){
//         cart[i] = 0;
//     }
//     return cart;
// }

// export const CartContextProvider = (props) =>{
//     const [cartItems,setCartItems] = useState(getDefaultCart())

//     const addToCart = (itemId) =>{
//         setCartItems((prev) => ({...prev, [itemId] : prev[itemId] +1}))
//     }

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}))
//     }

//     const CartContextValue = {cartItems,addToCart,removeFromCart}

//     return(
//         <CartContextProvider value={CartContextValue}>
//             {props.children}
//         </CartContextProvider>
//     )
// }