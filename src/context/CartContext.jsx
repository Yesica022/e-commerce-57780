import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    const condition = isInTheCart(item.id);
    if (!condition) {
      setCart((prevCart) => [...prevCart, item]);
    }
    console.log("Current cart:", cart);
  };

  const isInTheCart = (idProduct) => {
    const condition = cart.some((product) => product.id === idProduct);
    if (condition) {
      // Sumar la cantidad nueva
      const modifiedProducts = cart.map((cartProduct) => {
        if (cartProduct.id === idProduct) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        } else {
          return cartProduct;
        }
      });

      setCart(modifiedProducts);
    }
    return condition;
  };

  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return quantity;
  };

  return (
    <CartContext.Provider value={{ cart, addCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
