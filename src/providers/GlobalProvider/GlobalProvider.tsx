import { ReactNode } from 'react';

import { Header } from '@/components/Header';

import { ThemeProvider } from '../ThemeProvider';

type GlobalProviderProps = Readonly<{
  children: ReactNode;
}>;

export const GlobalProvider = ({ children }: GlobalProviderProps) => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <Header />
    {children}
  </ThemeProvider>
);
