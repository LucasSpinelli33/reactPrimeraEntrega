import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';
import data from '../data/data.json';
import styles from "../cssModules/ItemListContainer.module.css"; 

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();  

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);  
      }, 100);
    });
  };

  useEffect(() => {
    getProducts().then((productosData) => {
      
      const productosFiltrados = category
        ? productosData.filter((producto) => 
            producto.category.toLowerCase() === category.toLowerCase()
          )
        : productosData; 

      setProductos(productosFiltrados); 
    });
  }, [category]);  

  return (
    <div className={styles.container} >
      
      <h3 className={styles['main-title']}>{category ? ` ${category}` : 'TODOS LOS PRODUCTOS'}</h3>
      <ListItem productos={productos} /> 
    </div>
  );
}

export default ItemListContainer;