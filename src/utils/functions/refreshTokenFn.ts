import { JWT } from 'next-auth/jwt';

import { postRefreshToken } from '@/api/auth/endpoints';

export async function refreshTokenFn({ token }: { token: JWT }) {
  try {
    const response = await postRefreshToken({ access_token: token.access_token as string });

    token.access_token = response.access_token;
    token.access_token_expires = response.access_token_expires;

    return token;
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
