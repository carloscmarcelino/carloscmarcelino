/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DefaultError,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

export type FnReturn<TFn extends (...args: any) => any> = Awaited<ReturnType<TFn>>;

export type ReadQueryKey = [`read:${string}`, RequestInit | undefined];

export type ReadHookFn<TFn extends (...args: any) => any, QueryKey extends unknown[]> = (options?: {
  config?: RequestInit;
  queryConfig?: CustomQueryConfig<TFn, QueryKey>;
}) => UseQueryResult<FnReturn<TFn>>;

export type CustomQueryConfig<
  TFn extends (...args: any) => any,
  TQueryKey extends QueryKey,
> = UseQueryOptions<FnReturn<TFn>, DefaultError, FnReturn<TFn>, TQueryKey>;

export type CustomMutationConfig<TFn extends (...args: any) => any> = UseMutationOptions<
  FnReturn<TFn>,
  DefaultError,
  Parameters<TFn>['0'],
  DefaultError
>;

export type MutationHookFn<TFn extends (...args: any) => any> = (options?: {
  queryConfig?: CustomMutationConfig<TFn>;
}) => UseMutationResult<FnReturn<TFn>, DefaultError, Parameters<TFn>['0'], unknown>;

export type MutationHookFactory<TFn extends (...args: any) => any> = (options: {
  queryKeyBase: string;
  [k: `${string}Fn`]: TFn;
  defaultConfig?: CustomMutationConfig<TFn>;
}) => MutationHookFn<TFn>;
