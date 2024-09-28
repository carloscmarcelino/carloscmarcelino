import { getAccess } from '@/api/actions/endpoints';

import { FetchClient } from './FetchClient';
import { FetchOptions } from './types';

const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const authorizedFetchClient = new FetchClient(defaultConfig);
const authorizedUploadClient = new FetchClient();
const unauthorizedFetchClient = new FetchClient(defaultConfig);

const authorizeRequest = async (options: FetchOptions) => {
  const access_token = await getAccess();

  if (!access_token) {
    throw new Error('Access token is required');
  }

  if (access_token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${access_token}`,
    };
  }

  return options;
};

authorizedFetchClient.addRequestInterceptor(authorizeRequest);

export const api = {
  unauthorized: unauthorizedFetchClient,
  authorized: authorizedFetchClient,
  authorizedUpload: authorizedUploadClient,
};
