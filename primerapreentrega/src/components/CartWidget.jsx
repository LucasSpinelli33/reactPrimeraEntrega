import React from 'react';
import carrito from '../assets/img/carrito.png'; 

function CartWidget() {
    return (
        <div style={{ position: 'relative' }}>
            <img src={carrito} alt="Carrito" style={{ height: '30px' }} />
            <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                textAlign: 'center', // Centrar el texto
                width: '20px', // Ancho fijo para el círculo
            }}>
                3 
            </div>
        </div>
    );
}

export default CartWidget;