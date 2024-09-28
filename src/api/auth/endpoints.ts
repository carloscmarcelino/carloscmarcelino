import { api } from '@/lib/FetchClient';

import { LoginFn, RefreshFn } from './types';

export const postLogin: LoginFn = ({ email, password, config }) =>
  api.unauthorized.post('/auth/login', {
    body: {
      email,
      password,
    },
    ...config,
  });

export const postRefreshToken: RefreshFn = ({ access_token }) =>
  api.unauthorized.post('/auth/refresh-token', {
    body: { access_token },
  });
