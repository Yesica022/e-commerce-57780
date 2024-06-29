import React from "react";
import NavBar from "./../src/components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
        <Route path="/categoria/:idCategory" element={<ItemListContainer greeting="Category Products" />} />
        <Route path="/detalle/:idProduct" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

