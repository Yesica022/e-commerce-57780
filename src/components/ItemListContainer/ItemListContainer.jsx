import { useState, useEffect } from "react"; 
import { getProducts } from "../../data/data"; 
import useLoading from "../../hooks/useLoading"; 
import ItemList from "./ItemList"; 
import Loading from "../loading/Loading"; 


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  const { isLoading, showLoading, hideLoading} = useLoading(); // Usa el hook useLoading

  useEffect(() => {
    showLoading(); // Muestra el estado de carga al iniciar la solicitud

    getProducts()
      .then((respuesta) => {
        setProducts(respuesta); // Establece los productos cuando la promesa se resuelve
      })
      .catch((error) => {
        console.error(error); // Log de error si la promesa se rechaza
      })
      .finally(() => {
        hideLoading(); // Oculta el estado de carga al finalizar la solicitud
      });
  }, []);

  return (
    <div className="container mx-auto mt-4 p-4">
      <h2>{greeting}</h2>
      {isLoading ? <Loading/>: <ItemList products={products} />} 
    </div>
  );
};

export default ItemListContainer; 
