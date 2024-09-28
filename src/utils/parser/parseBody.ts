/* eslint-disable @typescript-eslint/no-explicit-any */

import { FetchOptionsWithExtendedBody } from '@/lib/FetchClient/types';

export function parseBody(fetchOptions: FetchOptionsWithExtendedBody) {
  const { body } = fetchOptions;
  const contentType = (fetchOptions.headers as any)?.['Content-Type'];

  if (!body) {
    return undefined;
  }

  if (contentType === 'application/json') {
    return JSON.stringify(body);
  }

  if (contentType === 'application/x-www-form-urlencoded') {
    return new URLSearchParams(body);
  }

  return undefined;
}
