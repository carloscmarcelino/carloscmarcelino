import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';

import { TanstackProvider } from '../TanstackProvider';
import { ThemeProvider } from '../ThemeProvider';

type GlobalProviderProps = Readonly<{
  children: ReactNode;
}>;

export const GlobalProvider = ({ children }: GlobalProviderProps) => (
  <TanstackProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Header />
      {children}
      <Toaster />
    </ThemeProvider>
  </TanstackProvider>
);
