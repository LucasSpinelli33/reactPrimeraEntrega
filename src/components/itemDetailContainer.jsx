import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import data from '../data/data.json';  


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();  

  const fetchItemById = (id) => {
    return new Promise((resolve, reject) => {
      const item = data.find((el) => el.id === parseInt(id));  

      if (item) {
        resolve(item);
      } else {
        reject({ error: "Producto no encontrado" });
      }
    });
  };

  useEffect(() => {
    fetchItemById(id)
      .then((res) => {
        setItem(res); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);  

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>} 
    </div>
  );
};

export default ItemDetailContainer;