import React from "react";

import "../styles/globals.scss";
import { Layout } from "../components";

import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="googleTag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Head>
        <title>Unreal Blog</title>
        <meta
          name="google-site-verification"
          content="ISpXxLlfRiP7Sx7AMDuy5H4z8A6mX4eNHETgqEpU4p8"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
