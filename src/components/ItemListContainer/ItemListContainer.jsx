// Importaciones de React y Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import ItemList from "./ItemList";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // Hook para obtener el parámetro de la URL
  const { idCategory } = useParams();

  // Hook personalizado para manejar el estado de carga
  const { isLoading, showLoading, hideLoading } = useLoading();

  // Función para obtener todos los productos
  const getProducts = async () => {
    showLoading();
    const productsRef = collection(db, "products");
    try {
      const respuesta = await getDocs(productsRef);

      const productos = respuesta.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productos);
    } catch (error) {
      console.error("Error al obtener productos: ", error);
    } finally {
      hideLoading();
    }
  };

  // Función para obtener productos filtrados por categoría
  const getProductsFilters = async () => {
    showLoading();
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));
    try {
      const respuesta = await getDocs(q);

      const productos = respuesta.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productos);
    } catch (error) {
      console.error("Error al obtener productos filtrados: ", error);
    } finally {
      hideLoading();
    }
  };

  // Hook useEffect para cargar los productos cuando cambia idCategory
  useEffect(() => {
    if (idCategory) {
      getProductsFilters();
    } else {
      getProducts();
    }
  }, [idCategory]); // Dependencia: idCategory

  return (
    <div className="container mx-auto mt-4 p-6 mb-28">
      <h2 className="text-2xl font-medium text-teal-600 mb-10">{greeting}</h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-teal-600 text-xl font-regular animate-pulse">
            Cargando...
          </div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
