import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../static/styles/GlobalStyles';
import Theme from '../static/styles/Theme';
import Navigation from '../components/Navigation';
import LayoutBody from '../components/LayoutBody';
import SubNavigation from '../components/SubNavigation';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Navigation />
        <LayoutBody>
          <SubNavigation />
          <Component {...pageProps} />
        </LayoutBody>
      </ThemeProvider>
    );
  }
}
