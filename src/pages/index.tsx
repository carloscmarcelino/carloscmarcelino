import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { MainLayout } from '@/components';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <></>;

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
  redirect: {
    destination: '/sobre',
    permanent: false,
  },
});
