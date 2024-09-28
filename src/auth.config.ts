import type { NextAuthConfig } from 'next-auth';

import { AUTH_SECRET } from '@/config';
import { providers } from '@/lib/providers';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token;
        token.access_token_expires = user.access_token_expires;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.access_token = token.access_token as string;
        session.user.access_token_expires = token.access_token_expires as number;
        session.user.role = token.role as 'admin' | 'user';
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers,
  debug: true,
  secret: AUTH_SECRET,
} satisfies NextAuthConfig;
