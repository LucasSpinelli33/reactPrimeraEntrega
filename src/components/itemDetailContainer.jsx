// ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import data from '../data/data.json';  // Asumiendo que tus datos están en este archivo

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();  // Obtenemos el ID del producto desde la URL

  const fetchItemById = (id) => {
    return new Promise((resolve, reject) => {
      const item = data.find((el) => el.id === parseInt(id));  // Filtramos el producto por ID

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
        setItem(res); // Establecemos el producto en el estado
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);  // Vuelve a ejecutar el efecto cada vez que el ID cambia

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}  {/* Muestra el detalle del producto */}
    </div>
  );
};

export default ItemDetailContainer;