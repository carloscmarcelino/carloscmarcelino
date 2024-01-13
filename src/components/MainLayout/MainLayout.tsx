import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

type MainLayoutProps = {
  children: JSX.Element;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Head>
      <title>Carlos Dev</title>
      <meta name="description" content="Carlos Dev" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>

    <Box>{children}</Box>
  </>
);
