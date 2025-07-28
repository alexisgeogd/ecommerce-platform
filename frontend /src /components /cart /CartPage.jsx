import { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product: {
        id: 101,
        name: 'Wireless Headphones',
        price: 99.99,
        image: '/images/headphones.jpg'
      },
      quantity: 2
    },
    {
      id: 2,
      product: {
        id: 102,
        name: 'Smart Watch',
        price: 199.99,
        image: '/images/watch.jpg'
      },
      quantity: 1
    }
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product.price * item.quantity), 
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      <div className="lg:flex gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <CartSummary 
            subtotal={subtotal} 
            itemsCount={cartItems.reduce((count, item) => count + item.quantity, 0)} 
          />
        </div>
      </div>
    </div>
  );
}
