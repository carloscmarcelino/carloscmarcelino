import Google from 'next-auth/providers/google';

import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from '@/config';

export const google = Google({
  clientId: AUTH_GOOGLE_ID,
  clientSecret: AUTH_GOOGLE_SECRET,
  // Google requires "offline" access_type to provide a `refresh_token`
  authorization: { params: { access_type: 'offline', prompt: 'consent' } },
});
