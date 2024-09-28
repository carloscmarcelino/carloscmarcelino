import { usePathname, useSearchParams, useRouter } from 'next/navigation';

type UseFiltersReturn = {
  getSearchParam: (param: string) => string | null;
  getAllSearchParam: (param: string) => string[] | null;
  setSearchParams: (param: string, value?: string) => void;
  setMultipleSearchParams: (params: Array<Record<string, string | string[]>>) => void;
  setMultipleSearchParamsPath: ({
    customPath,
    values,
  }: {
    customPath: string;
    values: Array<Record<string, string | string[]>>;
  }) => void;
  clearSearchParams: () => void;
};

export const useFilters = (): UseFiltersReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getSearchParam = (param: string): string | null => searchParams.get(param);
  const getAllSearchParam = (param: string): string[] | null => searchParams.getAll(param);

  function setSearchParams(param: string, value?: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  function removeUnusedParams(
    params: URLSearchParams,
    values: Array<Record<string, string | string[]>>,
  ) {
    Array.from(params.keys()).forEach((key) => {
      const found = values.some((obj) => Object.keys(obj).includes(key));
      if (!found) {
        params.delete(key);
      }
    });
  }

  function clearSearchParams() {
    router.replace(`${pathname}`);
  }

  function addNewParams(params: URLSearchParams, values: Array<Record<string, string | string[]>>) {
    values.forEach((obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (value instanceof Array) {
          value.forEach((item) => {
            if (!params.has(key, item)) {
              params.append(key, item);
            }
          });
        } else {
          if (value) {
            params.set(key, value);
          } else {
            params.delete(key);
          }
        }
      });
    });
  }

  function setMultipleSearchParams(values: Array<Record<string, string | string[]>>) {
    const params = new URLSearchParams();
    removeUnusedParams(params, values);
    addNewParams(params, values);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function setMultipleSearchParamsPath({
    values,
    customPath,
  }: {
    customPath: string;
    values: Array<Record<string, string | string[]>>;
  }) {
    const params = new URLSearchParams();
    removeUnusedParams(params, values);
    addNewParams(params, values);
    router.replace(`${customPath}?${params.toString()}`);
  }

  return {
    getSearchParam,
    getAllSearchParam,
    setSearchParams,
    setMultipleSearchParams,
    setMultipleSearchParamsPath,
    clearSearchParams,
  };
};
