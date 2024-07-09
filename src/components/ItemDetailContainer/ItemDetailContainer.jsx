import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/data.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const filteredProduct = data.find(
          (dataProduct) => dataProduct.id === idProduct
        );
        setProduct(filteredProduct);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [idProduct]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-10">
      <h2 className="text-3xl mb-8 mt-14 text-gray-700">Detalle del producto</h2>
      <div className="flex justify-center w-full px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-xl  overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="w-full md:w-96 h-96 object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">
                {product.category}
              </div>
              <h2 className="block mt-1 text-xl leading-tight font-medium text-gray-800">
                {product.name}
              </h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 text-gray-600">Stock: {product.stock}</p>
              <p className="mt-2 text-gray-600">Precio: {product.price}</p>
              <button className="mt-4 inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-sm leading-tight rounded-lg hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailContainer;
