import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
        async
        defer
        data-domain="tone-row.com"
        src="https://plausible.io/js/plausible.js"
      />
    </>
  );
}

export default MyApp;
