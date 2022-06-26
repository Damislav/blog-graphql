import React from "react";
import ThemeProvider from "../context/Theme/ThemeProvider";
import { Layout } from "../components";

import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
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
            property="og:title"
            content="Unreal learning blog"
            key="Unreal Blog"
          />
          <meta
            name="description"
            content="Learning Unreal Engine 4 can be real easy. "
          />
          <meta
            name="google-site-verification"
            content="ISpXxLlfRiP7Sx7AMDuy5H4z8A6mX4eNHETgqEpU4p8"
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="author" content="Ivan Damjanović" />
          <meta name="description" content="Free Web tutorials"></meta>
          <meta
            name="keywords"
            content="Unreal, Unreal Engine,UE4 ,UE5 ,gaming,game dev,gaming development,software,software development,unity,c++,programming,"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>{" "}
    </ThemeProvider>
  );
}

export default MyApp;
