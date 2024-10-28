import React from 'react';
import ItemListContainer from './components/ItemListContainer' ;
import NavBar from './components/NavBar' 

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer texto="Bienvenido a nuestra mueblería" />
        </div>
    );
}

export default App;

