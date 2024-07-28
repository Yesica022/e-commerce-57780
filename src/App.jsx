import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ProductSection from "./components/ProductSection/ProductSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
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
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
