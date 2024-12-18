import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { FaTrashAlt } from 'react-icons/fa'; // Usamos un icono de basura para eliminar productos

function Cart() {
    const { cart, removeFromCart } = useContext(cartContext); // Suponiendo que tienes una función para eliminar

    const getTotalPrice = () => {
        return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);
    };

    return (
        <div className="cart-container" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '50%' }}>
                <Card.Header as="h5" className="text-center">Tu carrito</Card.Header>
                <Card.Body>
                    {cart.length === 0 ? (
                        <div className="text-center">Está vacío!</div>
                    ) : (
                        <ListGroup variant="flush">
                            {cart.map(prod => (
                                <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center">
                                    <span>
                                        {prod.product_name} x {prod.quantity}
                                    </span>
                                    <span>
                                        ${prod.price * prod.quantity}
                                    </span>
                                    <Button 
                                        variant="danger" 
                                        size="sm" 
                                        onClick={() => removeFromCart(prod.id)} 
                                        style={{ marginLeft: '10px' }}
                                    >
                                        <FaTrashAlt />
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                    <div className="d-flex justify-content-between mt-3">
                        <strong>Total:</strong>
                        <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <Button variant="outline-secondary" onClick={() => alert('Proceeding to checkout')}>
                            Finalizar compra
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cart;