import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../cssModules/CartWidget.module.css'; // Asegúrate de que la ruta sea correcta

function CartWidget() {
    return (
        <div className={styles.cart}>
            <FaShoppingCart />
            <span>3</span> 
        </div>
    );
}

export default CartWidget;