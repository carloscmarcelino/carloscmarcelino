import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { GetManyResponse, ReadManyFn } from '@/api/__common__/types';
import { Params } from '@/types';
import { getNextPageParam, initialPageParam } from '@/utils/static/infiniteQueryConfig';

type QueryConfig<TData> = Partial<
  UseInfiniteQueryOptions<
    GetManyResponse<TData>,
    Error,
    InfiniteData<GetManyResponse<TData>, Error>,
    GetManyResponse<TData>,
    QueryKey,
    number
  >
>;

type UseQueryResult<TData> = UseInfiniteQueryResult<
  InfiniteData<GetManyResponse<TData>, unknown>,
  Error
>;

type UseGetInfinitePaginationProps<TData> = {
  queryKey: string;
  params: Params & { take: number };
  queryFunction: ReadManyFn<TData>;
  queryConfig?: QueryConfig<TData>;
};

/**
 * Hook implementado para REST API NodeJS
 * Em caso de api em Django será necessária adaptação
 */
export const useGetInfinitePagination = <TData>({
  queryKey,
  params,
  queryFunction,
  queryConfig,
}: UseGetInfinitePaginationProps<TData>): UseQueryResult<TData> =>
  useInfiniteQuery({
    queryKey: [queryKey, params],
    queryFn: async ({ pageParam = 1 }) => {
      const skip = (pageParam - 1) * params.take;

      return queryFunction({ params: { ...params, skip } });
    },
    initialPageParam,
    getNextPageParam: (lastPage: GetManyResponse<TData>, allPages: GetManyResponse<TData>[]) =>
      getNextPageParam<TData>({ lastPage, allPages, params }),
    ...queryConfig,
  });
