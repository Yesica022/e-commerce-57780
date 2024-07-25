//Importaciones de librerias
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

//Componente que muestra el icono del carrito
const CartWidget = () => {
  const { cart } = useContext(CartContext); // Obtenemos el carrito del contexto
  const { totalQuantify} = useContext(CartContext);

  return (
    <div className="relative flex items-center lg:mr-6 xl:mr-8">
      <FaShoppingCart
        className="text-gray-800 hover:text-teal-600 transition duration-300 ease-in-out"
        style={{ fontSize: 35 }}
      />
      <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
       {totalQuantify()}
      </span>
    </div>
  );
};

export default CartWidget;
