import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext); 

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        cart.map((cartProduct) => (
          <CartItem key={cartProduct.id} product={cartProduct} removeItem={removeItem} />
        ))
      ) : (
        <p className="text-center text-gray-500">Tu carrito está vacío</p>
      )}
    </div>
  );
};

const CartItem = ({ product, removeItem }) => (
  <div className="flex items-center p-4 mb-4 bg-white rounded-lg shadow-md">
    <img src={product.image} alt={product.title} className="w-20 h-20 rounded-lg mr-4" />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-500">{formatPrice(product.price)}</p>
      <p className="text-gray-700">Cantidad: {product.quantity}</p>
      <p className="text-gray-700">Total parcial: {formatPrice(product.price * product.quantity)}</p>
    </div>
    <button 
      onClick={() => removeItem(product.id)} 
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
    >
      Eliminar
    </button>
  </div>
);

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(price);
};

export default Cart;
