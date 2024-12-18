import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';
import { getProducts } from '../firebase/db';  // Aquí mantienes la importación
import styles from "../cssModules/ItemListContainer.module.css"; 
import cartContext from '../context/cartContext';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const { cart, addToCart, getQuantity } = useContext(cartContext);

  useEffect(() => {
    getProducts()
      .then(products => {
        // Filtramos productos si la categoría está presente
        const productosFiltrados = category
          ? products.filter(producto => 
              producto.category.toLowerCase() === category.toLowerCase()
            )
          : products;
        
        setProductos(productosFiltrados);
      })
      .catch(error => {
        console.error("Error al obtener productos:", error);
      });
  }, [category]);

  if (productos.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles['main-title']}>{category ? `${category}` : 'TODOS LOS PRODUCTOS'}</h3>
      <ListItem productos={productos} />
    </div>
  );
}

export default ItemListContainer;