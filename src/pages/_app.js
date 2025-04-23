import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>B2 Adventure - Em breve</title>
        <meta
          name="description"
          content="Nosso site está em construção. Lançamento em 01 de junho!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seusite.com/" />
        <meta property="og:title" content="Site em construção - Em breve" />
        <meta
          property="og:description"
          content="Nosso site está em construção. Lançamento em 01 de junho!"
        />
        <meta property="og:image" content="https://seusite.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://seusite.com/" />
        <meta
          property="twitter:title"
          content="Site em construção - Em breve"
        />
        <meta
          property="twitter:description"
          content="Nosso site está em construção. Lançamento em 01 de junho!"
        />
        <meta
          property="twitter:image"
          content="https://seusite.com/og-image.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
