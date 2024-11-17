import React from "react";
import Item from "./Item";
import styles from "../cssModules/ListItem.module.css";  // Importa el archivo CSS Module correcto

const ListItem = ({ productos }) => {
  return (
    <div className="container">
      <h1 className="main-title">Productos</h1>

      <div className={styles["card-container"]}>  {/* Aplica la clase 'card-container' */}
        {productos.length > 0 ? (
          productos.map((prod) => <Item producto={prod} key={prod.id} />)
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ListItem;