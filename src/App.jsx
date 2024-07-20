import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ProductSection from "./components/ProductSection/ProductSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterExample from "./components/Examples/CounterExample"; // Importación corregida

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductSection />
              <ItemListContainer greeting="Productos más vendidos" />
            </>
          }
        />
        <Route
          path="/categoria/:idCategory"
          element={<ItemListContainer greeting="" />}
        />
        <Route path="/detalle/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/examples" element={<CounterExample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
