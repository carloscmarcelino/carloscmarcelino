import { ReactElement } from 'react';

import { MainLayout } from '@/components';
import { AboutScreen } from '@/modules';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <AboutScreen />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
