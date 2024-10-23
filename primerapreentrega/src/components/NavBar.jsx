import React from 'react';
import CartWidget from './cartWidget';
import logo from '../assets/img/Logo-City.png'; 

function NavBar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8f9fa' }}>
            <img src={logo} alt="Logo de la tienda" style={{ height: '50px' }} />
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                <li>Mesas</li>
                <li>Sillas</li>
                <li>Camas</li>
                <li>Sofás</li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;