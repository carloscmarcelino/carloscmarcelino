import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';

import { FetchOptions } from '@/lib/FetchClient/types';
import { FnReturn } from '@/types/hook-factory';

import { getStackList } from '../endpoints';

type ReadQueryKey = [string, FetchOptions | undefined];

export type DashboardQueryConfig = Omit<
  UseQueryOptions<
    FnReturn<typeof getStackList>,
    Error,
    FnReturn<typeof getStackList>,
    ReadQueryKey
  >,
  'queryKey'
>;

export type UseGetStacksFn = (options?: {
  config?: FetchOptions;
  queryConfig?: DashboardQueryConfig;
}) => UseQueryResult<FnReturn<typeof getStackList>, Error>;

export const useGetStacks: UseGetStacksFn = ({ config, queryConfig } = {}) =>
  useQuery<FnReturn<typeof getStackList>, Error, FnReturn<typeof getStackList>, ReadQueryKey>({
    queryKey: ['stacks', config] as ReadQueryKey,
    queryFn: async () => await getStackList({ config }),
    ...queryConfig,
  });
