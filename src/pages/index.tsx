import { ReactElement } from 'react';

import { MainLayout } from '@/components';

import { NextPageWithLayout } from './_app';
import { HomeScreen } from '@/home';

const Page: NextPageWithLayout = () => <HomeScreen />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
