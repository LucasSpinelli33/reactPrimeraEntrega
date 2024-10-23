import React from 'react';
import CartWidget from './cartWidget';
import logo from '../assets/img/Logo-City.png'; 

function NavBar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <img src={logo} alt="Logo de la tienda" style={{ height: '50px' }} />
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                <a href=""><li>Mesas</li></a>
                <a href=""><li>Sillas</li></a>
                <a href=""><li>Camas</li></a>
                <a href=""><li>Sofás</li></a>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;