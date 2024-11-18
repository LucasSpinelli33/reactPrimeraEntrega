import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';
import data from '../data/data.json';  


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();  

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);  
      }, 1000);
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
    <div >
      
      <h3>{category ? ` ${category}` : 'Todos los productos'}</h3>
      <ListItem productos={productos} /> 
    </div>
  );
}

export default ItemListContainer;