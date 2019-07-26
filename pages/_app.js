import React from 'react';
import App, { Container } from 'next/app';
import withGA from 'next-ga';
import Router from 'next/router';
import AppWrapper from '../components/AppWrapper';

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
        <AppWrapper Component={Component} pageProps={pageProps} />
      </Container>
    );
  }
}

export default withGA('UA-143307999-1', Router)(ToneRowApp);
