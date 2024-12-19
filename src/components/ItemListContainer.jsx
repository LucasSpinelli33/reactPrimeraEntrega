import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';
import { getProducts, getFilterProducts } from '../firebase/db';
import styles from "../cssModules/ItemListContainer.module.css"; 
import cartContext from '../context/cartContext';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { category } = useParams();  
  const { cart, addToCart, getQuantity } = useContext(cartContext);

  useEffect(() => {
    if (category) {
      getFilterProducts(category, setItems);
    } else {
      getProducts(setItems);
    }
  }, [category]);  

  if (items.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles['main-title']}>
        {category ? `Categoría: ${category}` : 'TODOS LOS PRODUCTOS'}
      </h3>
      <ListItem productos={items} />
    </div>
  );
}

export default ItemListContainer;