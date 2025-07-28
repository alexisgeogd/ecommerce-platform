import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          ShopEase
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link 
            href="/products" 
            className={`hover:text-blue-600 ${router.pathname === '/products' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
          >
            Products
          </Link>
          
          {/* Cart Icon with Badge */}
          <div className="relative">
            <Link href="/cart" className="text-gray-700 hover:text-blue-600">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3 {/* Dynamic value */}
              </span>
            </Link>
          </div>

          {/* User Profile */}
          <Link href="/account" className="text-gray-700 hover:text-blue-600">
            <UserIcon className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
