import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

import { theme } from '@/styles/theme';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
