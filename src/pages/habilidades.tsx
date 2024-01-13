import { ReactElement } from 'react';

import { MainLayout } from '@/components';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <>habilidades</>;

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
