import React from 'react';
import App, { Container } from 'next/app';
import '../styles/main.scss';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

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
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
