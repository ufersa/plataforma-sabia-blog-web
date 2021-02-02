import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import NProgress from 'nprogress';
import ModalProvider from 'components/Modal';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Head>
          <title>Plataforma Sabiá - Blog</title>
          <meta
            name="description"
            content="O blog da plataforma de tecnologias do semi-árido brasileiro"
          />
        </Head>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
