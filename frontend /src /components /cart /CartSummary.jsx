import Link from 'next/link';

export default function CartSummary({ subtotal, itemsCount }) {
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Order Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal ({itemsCount} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-3 mt-3 flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="block mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700"
      >
        Proceed to Checkout
      </Link>

      <Link
        href="/products"
        className="block mt-2 text-center text-blue-600 hover:underline"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
