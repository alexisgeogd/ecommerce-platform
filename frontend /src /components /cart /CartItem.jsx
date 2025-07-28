import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="flex items-start border-b py-4">
      {/* Product Image */}
      <div className="relative w-20 h-20 mr-4">
        <Image
          src={item.product.image || '/images/placeholder-product.png'}
          alt={item.product.name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.product.name}</h3>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-500 hover:text-red-500"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
        
        {/* Quantity Controls */}
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="px-2 py-1 bg-gray-100 rounded-l disabled:opacity-50"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-50">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 bg-gray-100 rounded-r"
          >
            +
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="ml-4 text-right">
        <p className="font-medium">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
