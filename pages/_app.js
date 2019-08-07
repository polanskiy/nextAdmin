import React from 'react';
import App, { Container } from 'next/app';
import Nav from '../views/site/elements/Nav';
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

    return { pageProps, pathname: ctx.pathname };
  }

  render() {
    const { Component, pageProps, pathname } = this.props;
    return (
      <Container>
        {pathname !== '/admin' && <Nav />}
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
