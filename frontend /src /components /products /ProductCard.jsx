import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <Image 
        src={product.image || '/images/placeholder-product.png'}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Link href={`/products/${product.id}`} className="mt-4 inline-block text-blue-500">
        View Details
      </Link>
    </div>
  );
}
