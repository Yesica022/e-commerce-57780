import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import useLoading from "../../hooks/useLoading"; 
import { getProducts } from "../../data/data"; 
import ItemList from "./ItemList"; 
import Loading from "../loading/Loading"; 

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const { idCategory } = useParams(); // Extrae el parámetro idCategory

  const { isLoading, showLoading, hideLoading } = useLoading(); // Usa el hook useLoading

  useEffect(() => {
    showLoading(); // Muestra el estado de carga al iniciar la solicitud

    getProducts()
      .then((respuesta) => {
        // Filtra los productos según la categoría si idCategory está presente
        if (idCategory) {
          const filteredProducts = respuesta.filter(product => product.category === idCategory);
          setProducts(filteredProducts); // Establece los productos filtrados
        } else {
          setProducts(respuesta); // Establece todos los productos al inicio
        }
      })
      .catch((error) => {
        console.error(error); // Log de error si la promesa se rechaza
      })
      .finally(() => {
        hideLoading(); // Oculta el estado de carga al finalizar la solicitud
      });
  }, [idCategory]); // Añade idCategory como dependencia para actualizar cuando cambia

  return (
    <div className="container mx-auto mt-4 p-4">
      <h2>{greeting}</h2>
      {isLoading ? <Loading /> : <ItemList products={products} />} 
    </div>
  );
};

export default ItemListContainer;

