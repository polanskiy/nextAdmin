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
    const { page } = pageProps;
    const isValidPage = pathname !== '/admin' && pathname !== '/dlogin' && pathname !== '/_error' && page;
    let meta = 'meta';
    if (page && page.meta) {
      meta = page.meta;
    }

    return (
      <>
        <Head>
          <title>{meta.title || ''}</title>
          <meta name="description" content={meta.description || ''} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no" />
          <meta name="yandex-verification" content="0bc5d2fabf0c1a80" />
          {pathname === '/admin' && <script src="/static/tinymce.min.js" />}
          <script type="text/javascript" >
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(56318479, "init", {
                  clickmap: true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
          </script>
          <noscript><div><img src="https://mc.yandex.ru/watch/56318479" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
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
