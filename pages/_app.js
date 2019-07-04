import React from 'react';
import App, { Container } from 'next/app';
import Sidebar from '../components/Sidebar';

class ToneRowApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div id="App">
          <Sidebar />
          <Component {...pageProps} />
          <style jsx>{`
            min-height: 100vh;
            display: grid;
            grid-template-columns: 400px auto;
          `}</style>
        </div>
      </Container>
    );
  }
}

export default ToneRowApp;
