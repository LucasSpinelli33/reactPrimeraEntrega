import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/db';

const CartForm = ({ cart, onSubmit }) => {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!form.name) errors.name = 'El nombre es obligatorio.';
        if (!form.lastName) errors.lastName = 'El apellido es obligatorio.';
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errors.email = 'El correo electrónico es inválido.';
        if (!form.phone || !/^\d{10}$/.test(form.phone)) errors.phone = 'El teléfono debe tener 10 dígitos.';

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Crea la orden con los datos del formulario y el carrito
            const order = {
                buyer: { name: form.name, lastName: form.lastName, email: form.email, phone: form.phone },
                items: cart,
                total: cart.reduce((total, prod) => total + prod.price * prod.quantity, 0),
                date: serverTimestamp()
            };

            try {
                // Enviar los datos de la compra a Firebase
                const docRef = await addDoc(collection(db, "orders"), order);
                console.log("Orden guardada con ID: ", docRef.id);
                onSubmit(form); // Llamamos al onSubmit para pasar los datos al componente padre si es necesario
            } catch (e) {
                console.error("Error añadiendo el pedido a Firebase: ", e);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '300px', marginLeft: '20px' }}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                />
                {formErrors.lastName && <div className="text-danger">{formErrors.lastName}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                />
                {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
            </div>

            <Button variant="outline-secondary" type="submit">
                Finalizar compra
            </Button>
        </form>
    );
};

export default CartForm;