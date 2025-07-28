import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders/user/1') // Το userId θα είναι δυναμικό μετά
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Your Orders</h1>
            {orders.map(order => (
                <div key={order.id}>
                    Order #{order.id} - Total: ${order.totalPrice}
                </div>
            ))}
        </div>
    );
}
