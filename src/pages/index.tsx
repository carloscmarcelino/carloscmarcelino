import { ReactElement } from 'react';

import { MainLayout } from '@/components';
import { HomeScreen } from '@/home';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <HomeScreen />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
