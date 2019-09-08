import React from 'react'
import App from 'next/app'
import Router from 'next/router';
import withGA from 'next-ga';
import AppWrapper from '../components/AppWrapper'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <AppWrapper {...this.props} />;
  }
}

export default withGA('UA-143307999-1', Router)(MyApp);
