import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../firebase/db';  // Aquí ahora debería funcionar correctamente

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  const fetchItemById = async (id) => {
    try {
      const product = await getProductById(id);  // Aquí se obtiene el producto
      setItem(product);  // Se actualiza el estado con el producto
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  useEffect(() => {
    fetchItemById(id);  // Llama a la función cada vez que cambia el ID
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail detail={item} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;