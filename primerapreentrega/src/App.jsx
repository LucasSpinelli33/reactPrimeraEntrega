import React from 'react';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer texto="Bienvenido a nuestra mueblería" />
        </div>
    );
}

export default App;

