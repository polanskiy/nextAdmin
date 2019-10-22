import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import Nav from '../views/site/elements/Nav';
import Layout from '../views/site/hoc/Layout';
import '../styles/main.scss';
import RequestForm from '../views/site/elements/RequestForm';

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
    const isValidPage = pathname !== '/admin' && pathname !== '/dlogin' && pathname !== '/_error' && pageProps.page;
    return (
      <>
        <Head>
          <title>Путешествия с Дасей Суриковой</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no" />
          {pathname === '/admin' && <script src="/static/tinymce.min.js" />}
        </Head>
        <Layout>
          {isValidPage && <Nav pathname={pathname} />}
          <Component {...pageProps} />
          {isValidPage && (
          <div className="cloudBox">
            <picture>
              <source media="(max-width: 992px)" srcSet="/static/images/cloudSmall.png" />
              <img srcSet="/static/images/cloudBig.png" alt="dasya travel" />
            </picture>
          </div>
          )}
          {isValidPage && <RequestForm />}
        </Layout>
        <NextNprogress
          color="linear-gradient(to right, #f1c40f 0%, #e67e22 100%)"
          startPosition={0.3}
          stopDelayMs={100}
          height="3"
        />
      </>
    );
  }
}

export default MyApp;
