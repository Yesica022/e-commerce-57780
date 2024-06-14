import { getProducts } from "../../data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList"; // Ajusta la ruta según tu estructura de proyecto

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.error(error); // Log de error si la promesa se rechaza
      })
      .finally(() => {
        console.log("Finalizó la promesa");
      });
  }, []);

  return (
    <div className="container mx-auto mt-4 p-4">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

