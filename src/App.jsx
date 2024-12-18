import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import {doc, getDoc, getFirestore } from "firebase/firestore" ;
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/category/:category" element={<ItemListContainer />} /> 
        <Route path="/producto/:id" element={<ItemDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
