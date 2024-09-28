import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import { postLogin } from '@/api/auth/endpoints';

export const signInSchema = z.object({
  email: z.string({ required_error: 'Email is required' }),
  password: z.string({ required_error: 'Password is required' }).min(1, 'Password is required'),
});

export type CredentialsBodyType = z.infer<typeof signInSchema>;

export const credentials = Credentials({
  async authorize(credentials) {
    const credentialsValidation = signInSchema.safeParse(credentials);

    if (credentialsValidation.success) {
      const { email, password } = credentialsValidation.data;

      const response = await postLogin({ email, password });

      return {
        role: 'admin',
        access_token: response.access_token,
        access_token_expires: response.access_token_expires,
      };
    }

    return null;
  },
});
