import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../RelatedProducts/RelatedProducts.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";
import db from "../../db/db.js";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { idProduct } = useParams();
  const { addCart } = useContext(CartContext);

  // Función para obtener el producto específico
  const getProduct = async () => {
    const docRef = doc(db, "products", idProduct);
    try {
      const respuesta = await getDoc(docRef);
      if (respuesta.exists()) {
        const data = { id: respuesta.id, ...respuesta.data() };
        setProduct(data);
        // Lógica para obtener productos relacionados
        getRelatedProducts(data.category);
      } else {
       
      }
    } catch (error) {
     
    }
  };

  // Función para obtener productos relacionados
  const getRelatedProducts = async (category) => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", category));
    try {
      const respuesta = await getDocs(q);
      const productos = respuesta.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Filtrar productos relacionados para excluir el producto actual
      setRelatedProducts(productos.filter((p) => p.id !== idProduct));
    } catch (error) {
     
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]); // Ejecuta cuando idProduct cambia

  const handleAddToCart = (quantity) => {
    const productToAdd = {
      ...product,
      quantity: quantity,
    };
    addCart(productToAdd);
   
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-teal-600 text-xl font-regular animate-pulse">
          Cargando...
        </div>
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
