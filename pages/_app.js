import { ThemeProvider } from '@mui/material/styles';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/layout/base-layout/Layout';
import CircularIndeterminate from '../components/loader/route-loader/CircularIndeterminate';
import StorageProvider from '../store/cart-context';
import CheckoutProvider from '../store/checkout-context';
import UserProvider from '../store/user-context';
import '../styles/globals.css';
import theme from '../styles/muiTheme';

const Providers = ({ components, children }) => (
  <>
    {components.reduceRight(
      (acc, Comp) => (
        <Comp>{acc}</Comp>
      ),
      children
    )}
  </>
);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <ThemeProvider theme={theme}>
            <Providers
              components={[CheckoutProvider, StorageProvider, UserProvider]}
            >
              <Layout>
                <Head>
                  <title>Coffee Shop</title>
                  <meta name="description" content="NextJS template" />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                  />
                </Head>
                <CircularIndeterminate />
                <Component {...pageProps} />
              </Layout>
            </Providers>
          </ThemeProvider>
        </SessionProvider>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </Hydrate>
    </QueryClientProvider>
  );
}


export default appWithTranslation(MyApp);
