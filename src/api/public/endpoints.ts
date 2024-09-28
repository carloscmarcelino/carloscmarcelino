import { CreateFn, ReadFn } from '@/api/__common__/types';
import { api } from '@/lib/FetchClient';

import { StackBody, StackResponse } from './types';

export const getStackList: ReadFn<StackResponse> = ({ config } = {}) =>
  api.unauthorized.get('/list', {
    ...config,
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['stacks'],
    },
  });

export const postStack: CreateFn<StackBody, StackResponse> = ({ body, config }) =>
  api.unauthorized.post('/list', {
    ...config,
    body: body,
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['stacks'],
    },
  });
