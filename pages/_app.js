import React from 'react';
import App, { Container } from 'next/app';
import ReactGA from 'react-ga';
import Router from 'next/router';
import Sidebar from '../components/Sidebar';

ReactGA.initialize('UA-143307999-1');

class ToneRowApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props) {
    super(props);

    Router.onHashChangeComplete = () =>
      ReactGA.pageview(window.location.pathname + window.location.search);
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
