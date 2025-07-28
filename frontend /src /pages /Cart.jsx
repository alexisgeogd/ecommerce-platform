import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios.get('/api/cart/1') // Το userId θα είναι δυναμικό μετά
            .then(response => setCart(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart?.items.map(item => (
                <div key={item.id}>
                    {item.product.name} x {item.quantity}
                </div>
            ))}
            <button onClick={() => axios.post('/api/orders/checkout', { userId: 1 })}>
                Checkout
            </button>
        </div>
    );
}
