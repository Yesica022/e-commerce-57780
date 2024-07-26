import React, { createContext, useState } from "react";

// Creación del contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addCart = (item) => {
    const condition = isInTheCart(item.id);
    if (!condition) {
      setCart((prevCart) => [...prevCart, item]);
    } else {
      // Sumar la cantidad nueva si el producto ya está en el carrito
      const modifiedProducts = cart.map((cartProduct) => {
        if (cartProduct.id === item.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        } else {
          return cartProduct;
        }
      });
      setCart(modifiedProducts);
    }
    console.log("Current cart:", cart);
  };

  // Verificar si el producto está en el carrito
  const isInTheCart = (idProduct) => {
    return cart.some((product) => product.id === idProduct);
  };

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return quantity;
  };

  // Calcular el precio total del carrito de compras

  // Vaciar el carrito
  const emptyCart = () => {
    setCart([]);
  };

  // Eliminar un producto del carrito
  const removeItem = (idProduct) => {
    const filteredProducts = cart.filter(
      (cartProduct) => cartProduct.id !== idProduct
    );
    setCart(filteredProducts);
  };

  return (
    <CartContext.Provider
      value={{ cart, addCart, totalQuantity, emptyCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
