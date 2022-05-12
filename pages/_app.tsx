import "modern-css-reset";
import "./_app.css";
import "../slang/slang.css";
// Code Highlight
import "highlight.js/styles/night-owl.css";

import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N7E0DG4GJC"
      />
      <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N7E0DG4GJC');`,
        }}
      />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000" />
      </Head>
      <Script
        async
        defer
        data-domain="tone-row.com"
        src="https://plausible.io/js/plausible.js"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
