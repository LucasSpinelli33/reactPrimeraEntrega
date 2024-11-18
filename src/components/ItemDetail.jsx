import React from 'react';
import styles from '../cssModules/ItemDetail.module.css';  
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles["producto-detalle"]}>
        <img src={item.image} alt={item.product_name} />
        <div>
          <h3 className={styles.productName}>{item.product_name}</h3>
          <p className={styles.description}>{item.description}</p>
          <p className={styles.category}>Categoría: {item.category}</p>
          <p className={styles.price}>${item.price}</p>
          <ItemCount/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;