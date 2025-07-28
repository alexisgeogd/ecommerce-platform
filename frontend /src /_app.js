import '@/styles/globals.css';
import '@/styles/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/utils/auth';
import Layout from '@/components/common/Layout';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check auth for protected routes
  useEffect(() => {
    const protectedRoutes = ['/account', '/checkout'];
    const authRequired = protectedRoutes.includes(router.pathname);
    const isAuth = isAuthenticated();

    if (authRequired && !isAuth) {
      router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="E-commerce platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthProvider>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
