import { ReactNode } from 'react';

import { Toaster } from '@/components/ui/sonner';

import { TanstackProvider } from '../TanstackProvider';
import { ThemeProvider } from '../ThemeProvider';

type GlobalProviderProps = Readonly<{
  children: ReactNode;
}>;

export const GlobalProvider = ({ children }: GlobalProviderProps) => (
  <TanstackProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  </TanstackProvider>
);
