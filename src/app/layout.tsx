import '../styles/globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

import { GlobalProvider } from '@/providers';

const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Next Leap',
  description: 'Next.js boilerplate made by Loomi',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="pt_BR" className={montserratFont.variable}>
    <body className={montserratFont.className}>
      <GlobalProvider>{children}</GlobalProvider>
    </body>
  </html>
);

export default RootLayout;
