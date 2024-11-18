import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';

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
