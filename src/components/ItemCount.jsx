import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap'; 
import styles from '../cssModules/ItemCount.module.css';  
import { useContext } from 'react';
import cartContext  from '../context/cartContext'

const ItemCount = ({ detail }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(cartContext)
  const handleAddToCart = () => {
    addToCart({ ...detail, quantity: count })
  }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Card className={`p-3 text-center shadow-sm ${styles.card}`} style={{ width: '200px', margin: 'auto' }}>
      <Card.Body>
        <h5>Selecciona Cantidad</h5>

        
        <div className={styles.countControls}>
        
          <span className={styles.counter}>{count}</span>
          <Button 
            variant="danger" 
            size="sm" 
            onClick={decrement} 
            className={styles.button}
          >
            -
          </Button>

          <Button 
            variant="success" 
            size="sm" 
            onClick={increment} 
            className={styles.button}
          >
            +
          </Button>
        </div>

        <Button 
          variant="primary" 
          className="mt-3 w-100" 
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;