import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../firebase/db';  

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  const fetchItemById = async (id) => {
    try {
      const product = await getProductById(id);  
      setItem(product);  
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  useEffect(() => {
    fetchItemById(id);  
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail detail={item} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;