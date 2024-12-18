import { useState } from 'react';
import cartContext from './cartContext';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    const getQuantity = () => {
        const quantityOnly = cart.map(prod => prod.quantity);
        const total = quantityOnly.reduce((acc, current) => acc + current, 0); 
        return total;
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, getQuantity }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;