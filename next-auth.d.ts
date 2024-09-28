import { type DefaultSession } from 'next-auth';
declare module 'next-auth' {
  interface User extends DefaultSession['user'] {
    access_token: string;
    access_token_expires: number;
    role: 'admin' | 'user';
  }
}
