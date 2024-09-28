import { GetManyResponse } from '@/api/__common__/types';

const initialPageParam = 1;

type Params = {
  take: number;
};

type GetNextPageParamFn<T> = {
  lastPage: GetManyResponse<T>;
  allPages: GetManyResponse<T>[];
  params: Params;
};

/**
 * This function is used to get the next page number from the last page response
 * @example
 * const infiniteQueryConfig = {
 *   queryFn: async ({ pageParam }: { pageParam: number }) => await getProjects({ config: { params: { page: pageParam, count: 5 } }),
 *   getNextPageParam: getNextPageParam<ProjectResponse>,
 *   ...config
 * }
 *
 */

const getNextPageParam = <T>({ lastPage, allPages, params }: GetNextPageParamFn<T>) => {
  const maxPages = Math.ceil(lastPage?.total_items / params.take);
  const nextPage = allPages.length + 1;

  return nextPage <= maxPages ? nextPage : undefined;
};

export { initialPageParam, getNextPageParam };
