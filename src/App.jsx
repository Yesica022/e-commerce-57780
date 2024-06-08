import React from 'react';
import NavBar from './../src/components/NavBar';
import ItemListContainer from './../src/components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;




