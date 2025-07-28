import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function EmptyCart() {
  return (
    <div className="text-center py-12">
      <ShoppingBagIcon className="h-16 w-16 mx-auto text-gray-400" />
      <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
      <p className="mt-1 text-gray-500">Start adding some items to your cart</p>
      <Link
        href="/products"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Browse Products
      </Link>
    </div>
  );
}
