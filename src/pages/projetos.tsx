import { ReactElement } from 'react';

import { MainLayout } from '@/components';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <>projetos</>;

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
