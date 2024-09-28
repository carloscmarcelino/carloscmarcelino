'use client';

import {
  isServer,
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

export type TanstackProviderProps = Omit<QueryClientProviderProps, 'client'>;

export const TanstackProvider = ({ children, ...props }: TanstackProviderProps) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider {...props} client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
