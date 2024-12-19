import React, { useContext, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrashAlt } from 'react-icons/fa';
import cartContext from '../context/cartContext';
import CartForm from './CartForm'; 

const Cart = () => {
    const { cart, removeFromCart } = useContext(cartContext);
    const [successMessage, setSuccessMessage] = useState(false);

    const getTotalPrice = () => {
        return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);
    };

    const handleFormSubmit = (formData) => {
        setSuccessMessage(true);  
        setTimeout(() => setSuccessMessage(false), 5000);  
    };

    return (
        <div className="cart-container" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '80%' }}>
                
                <Card style={{ width: '50%' }}>
                    <Card.Header as="h5" className="text-center">Tu carrito</Card.Header>
                    <Card.Body>
                        {cart.length === 0 ? (
                            <div className="text-center">Está vacío!</div>
                        ) : (
                            <ListGroup variant="flush">
                                {cart.map((prod) => (
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
                    </Card.Body>
                </Card>

                {/* Formulario de compra */}
                <div style={{ marginLeft: '20px', width: '40%' }}>
                    <CartForm cart={cart} onSubmit={handleFormSubmit} />
                </div>
            </div>

            {/* Mostrar mensaje de éxito si la compra fue realizada */}
            {successMessage && (
                <div 
                    className="alert alert-success mt-3" 
                    role="alert"
                    style={{
                        position: 'absolute', 
                        top: '20px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        zIndex: '1000', 
                        width: '80%'
                    }}
                >
                    ¡La compra fue realizada con éxito!
                </div>
            )}
        </div>
    );
};

export default Cart;