// Importaciones de librerías
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

// Componente que muestra el icono del carrito
const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext); // Obtenemos totalQuantity del contexto

  const quantity = totalQuantity(); // Obtenemos la cantidad total de productos en el carrito

  return (
    <Link to="/carrito" className="relative flex items-center lg:mr-6 xl:mr-8">
      <FaShoppingCart
        className="text-gray-800 hover:text-teal-600 transition duration-300 ease-in-out"
        style={{ fontSize: 35 }}
      />
      {quantity > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          {quantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
