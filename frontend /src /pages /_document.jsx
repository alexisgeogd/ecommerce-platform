// frontend/src/pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="el">
      <Head>
        {/* Global meta tags */}
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <body>
        <Main /> {/* Εδώ μπαίνουν όλα τα components σας */}
        <NextScript /> {/* Next.js scripts */}
      </body>
    </Html>
  );
}
