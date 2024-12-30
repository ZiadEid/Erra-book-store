import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handelOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  const [isCartItems, setIsCartItems] = useState(JSON.parse(localStorage.getItem("isCartItems")) || false);


  const value = {
    orderPopup,
    handelOrderPopup,
    isCartItems, 
    setIsCartItems
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};