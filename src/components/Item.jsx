import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../cssModules/Item.module.css'; // Importa el archivo CSS Module correcto

const Item = ({ producto }) => {
  return (
    <div className={styles.card}>
      <Card>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.product_name}</Card.Title>
          <Card.Text>
            Categoría: {producto.category} <br />
            Precio: ${producto.price}
          </Card.Text>
          {/* Enlace a la página de detalles del producto */}
          <Button as={Link} to={`/producto/${producto.id}`}>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;