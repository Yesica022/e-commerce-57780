import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Current cart:", cart); // Log para verificar el estado del carrito
  };

  const totalQuantify = () => {
    const quantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return quantity;
  };

  return (
    <CartContext.Provider value={{ cart, addCart, totalQuantify }}>
      {children}
    </CartContext.Provider>
  );
};
