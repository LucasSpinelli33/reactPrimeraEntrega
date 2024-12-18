import React from 'react';
import styles from '../cssModules/ItemDetail.module.css';  
import ItemCount from './ItemCount';

const ItemDetail = ({ detail }) => { 
  return (
    <div className={styles.container}>
      <div className={styles["producto-detalle"]}>
        <img src={detail.image} alt={detail.product_name} />
        <div>
          <h3 className={styles.productName}>{detail.product_name}</h3>
          <p className={styles.description}>{detail.description}</p>
          <p className={styles.category}>Categoría: {detail.category}</p>
          <p className={styles.price}>${detail.price}</p>
          <ItemCount detail={detail} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;