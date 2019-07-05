import React from 'react';
import App, { Container } from 'next/app';
import withGA from 'next-ga';
import Router from 'next/router';
import Sidebar, { Title } from '../components/Sidebar';

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
        <Title tag="span" className="shadow" />
        <div id="App">
          <Sidebar />
          <Component {...pageProps} />
          <style jsx>{`
            #App {
              min-height: 100vh;
            }
            @media (min-width: 769px) {
              #App {
                display: grid;
                grid-template-columns: var(--sidebar-width) auto;
              }
            }
          `}</style>
        </div>
      </Container>
    );
  }
}

export default withGA('UA-143307999-1', Router)(ToneRowApp);
