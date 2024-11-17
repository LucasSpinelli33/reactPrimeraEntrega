import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemDetailContainer from './components/itemDetailContainer';


//por ahora vamos bien. Routeo ok. Filtros de categorias ok. 
//me falta ver los productos individuales y el evento de los botones
//Ver css

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/reactPrimeraEntrega/" element={<ItemListContainer />} /> 
        <Route path="/category/:category" element={<ItemListContainer />} /> 
        <Route path="/producto/:id" element={<ItemDetailContainer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
