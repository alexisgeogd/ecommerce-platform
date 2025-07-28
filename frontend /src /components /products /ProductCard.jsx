import { Product } from './types';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ProductCard({ 
  product,
  onAddToCart 
}: { 
  product: Product;
  onAddToCart?: () => void;
}) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image || '/images/placeholder-product.png'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold bg-red-500 px-2 py-1 rounded">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link 
            href={`/products/${product.id}`}
            className="text-lg font-semibold hover:text-blue-600 transition-colors"
          >
            {product.name}
          </Link>
          <span className="font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i}
                className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">
              ({product.rating.toFixed(1)})
            </span>
          </div>
        )}

        {/* Category */}
        <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
          {product.category}
        </span>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          disabled={product.stock <= 0}
          className={`mt-4 w-full py-2 rounded-md ${product.stock > 0 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
