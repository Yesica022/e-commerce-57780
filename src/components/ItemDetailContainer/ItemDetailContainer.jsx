import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/data.js";
import RelatedProducts from "../RelatedProducts/RelatedProducts.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { idProduct } = useParams();
  const { addCart } = useContext(CartContext);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const filteredProduct = data.find(
          (dataProduct) => dataProduct.id === idProduct
        );
        setProduct(filteredProduct);

        const related = data.filter(
          (dataProduct) =>
            dataProduct.category === filteredProduct.category &&
            dataProduct.id !== filteredProduct.id
        );
        setRelatedProducts(related);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [idProduct]);

  const handleAddToCart = (quantity) => {
    const productToAdd = {
      ...product,
      quantity: quantity,
    };
    addCart(productToAdd);
    console.log(`Added ${quantity} items of ${product.name} to cart`);
  };
  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-teal-600 text-xl font-regular animate-pulse">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-10">
      <h2 className="text-3xl mb-4 mt-14 text-span">Detalle del producto</h2>
      <div className="flex justify-center w-full px-4 mt-6">
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
              <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={handleAddToCart}
              />
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
