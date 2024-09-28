import { DefaultError, useMutation } from '@tanstack/react-query';

import { FnReturn, MutationHookFn } from '@/types/hook-factory';

import { postStack } from '../endpoints';

export type CreateMutationKey = [`create:${string}`];

export const useCreateStack: MutationHookFn<typeof postStack> = ({ queryConfig = {} } = {}) =>
  useMutation<
    FnReturn<typeof postStack>,
    DefaultError,
    Parameters<typeof postStack>['0'],
    DefaultError
  >({
    mutationKey: [`create:stack`] as CreateMutationKey,
    mutationFn: postStack,
    ...queryConfig,
  });
