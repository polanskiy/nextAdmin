import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
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
        <Head>
          <title>Путешествия с Дасей Суриковой</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no" />
        </Head>
        {pathname !== '/admin' && pathname !== '/dlogin' && <Nav pathname={pathname} />}
        <Component {...pageProps} />
        <NextNprogress
          color="linear-gradient(to right, #f1c40f 0%, #e67e22 100%)"
          startPosition={0.3}
          stopDelayMs={100}
          height="3"
        />
      </Container>
    );
  }
}

export default MyApp;
