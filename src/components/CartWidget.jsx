import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import cartContext from '../context/cartContext';
import styles from '../cssModules/CartWidget.module.css'; 
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { getQuantity } = useContext(cartContext);
  
  return (
    <Button variant="light" 
    className={styles.button}
    as={Link}
    to='/cart'>  
      🛒 {getQuantity()}
    </Button>
  );
}

export default CartWidget;