import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { Navbar } from '../Navbar';

type MainLayoutProps = {
  children: JSX.Element;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Head>
      <title>Carlos</title>
      <meta name="description" content="Carlos" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>

    <Flex>
      <Navbar />

      <Box>{children}</Box>
    </Flex>
  </>
);
