import { FetchOptionsWithExtendedBody } from '@/lib/FetchClient/types';

export type AuthResponse = {
  access_token: string;
  access_token_expires: number;
  user: UserResponse;
};

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client';
};

export type LoginFn = (args: {
  email: string;
  password: string;
  config?: FetchOptionsWithExtendedBody;
}) => Promise<AuthResponse>;

export type RefreshFn = (args: {
  access_token: string;
  config?: FetchOptionsWithExtendedBody;
}) => Promise<{ access_token: string; access_token_expires: number }>;
