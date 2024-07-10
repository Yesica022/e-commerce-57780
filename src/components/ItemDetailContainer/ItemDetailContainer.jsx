import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/data.js";
import RelatedProducts from "../RelatedProducts/RelatedProducts.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const filteredProduct = data.find(
          (dataProduct) => dataProduct.id === idProduct
        );
        setProduct(filteredProduct);

        // Filtrar productos relacionados
        const related = data.filter(
          (dataProduct) => dataProduct.category === filteredProduct.category && dataProduct.id !== filteredProduct.id
        );
        setRelatedProducts(related);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [idProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-10">
      <h2 className="text-3xl mb-4 mt-14 text-span">Detalle del producto</h2>
      <p className="text-lg mb-8">¡Mira lo que hace especial a este producto! Descubre sus características y beneficios para ayudarte a decidir tu compra.</p>
      <div className="flex justify-center w-full px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">
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
      <div className="mt-10">
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
