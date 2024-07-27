import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

// Componente principal del carrito
const Cart = () => {
  // Extraer valores del contexto del carrito
  const { cart, removeItem, emptyCart, totalPrice } = useContext(CartContext);

  return (
    <div className="container mx-auto p-12">
      {cart.length > 0 ? (
        <>
          {/* Mapear sobre los productos en el carrito y renderizar cada uno */}
          {cart.map((cartProduct) => (
            <CartItem
              key={cartProduct.id}
              product={cartProduct}
              removeItem={removeItem}
            />
          ))}
          {/* Sección de total y botones */}
          <div className="text-center mt-8">
            <p className="text-lg font-semibold mb-4">
              Precio Total: {formatPrice(totalPrice())}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={emptyCart}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                aria-label="Vaciar carrito"
              >
                Vaciar carrito
              </button>
              <button
                className="inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-sm leading-tight rounded-lg hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                aria-label="Continuar con la compra"
              >
                Continuar con la compra
              </button>
            </div>
          </div>
        </>
      ) : (
        // Mensaje si el carrito está vacío
        <p className="text-center text-gray-500">Tu carrito está vacío</p>
      )}
    </div>
  );
};

// Componente para cada elemento del carrito
const CartItem = ({ product, removeItem }) => (
  <div className="flex items-center p-4 mb-4 bg-white rounded-lg shadow-md">
    {/* Imagen del producto */}
    <img
      src={product.image}
      alt={product.title}
      className="w-20 h-20 rounded-lg mr-4"
    />
    <div className="flex-1">
      {/* Título del producto */}
      <h3 className="text-lg font-semibold">{product.title}</h3>
      {/* Precio del producto */}
      <p className="text-gray-500">{formatPrice(product.price)}</p>
      {/* Cantidad del producto */}
      <p className="text-gray-700">Cantidad: {product.quantity}</p>
      {/* Precio total parcial del producto */}
      <p className="text-gray-700">
        Total parcial: {formatPrice(product.price * product.quantity)}
      </p>
    </div>
    {/* Botón para eliminar el producto del carrito */}
    <button
      onClick={() => removeItem(product.id)}
      className="outline outline-1 outline-offset-2 text-red-500 px-3 py-1 rounded-md hover:bg-red-50 transition duration-300"
      aria-label="Eliminar producto"
    >
      Eliminar
    </button>
  </div>
);

// Función para formatear el precio
const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(price);
};

export default Cart;
