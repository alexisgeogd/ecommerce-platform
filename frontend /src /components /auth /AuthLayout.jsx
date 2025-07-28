import Head from 'next/head';
import Link from 'next/link';

export default function AuthLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} | ShopEase</title>
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-xl font-bold text-blue-600">
              ShopEase
            </Link>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          {children}
        </main>

        <footer className="bg-white py-4 border-t">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
