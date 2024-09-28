Segue o passo a passo para configurar a autenticação utilizando `next-auth` com base nos arquivos fornecidos.

### Configuração de Autenticação com NextAuth

#### Passo 1: Configuração do `auth.ts`

No arquivo `auth.ts`, você já possui a configuração básica para inicializar o NextAuth. Se precisar adicionar algum middleware ou modificar algo, este é o lugar.

```typescript
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
```

#### Passo 2: Configuração do `auth.config.ts`

No arquivo `auth.config.ts`, configure os callbacks e os providers. Este arquivo controla as rotas de autenticação, as sessões e as funções de callback para JWT e sessão.

```typescript
import type { NextAuthConfig } from 'next-auth';
import { providers } from './api/auth/providers';
import { AUTH_SECRET } from './config';

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
        return !!isLoggedIn;
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
```

#### Passo 3: Configuração do `auth.d.ts`

No arquivo `auth.d.ts`, você estende as definições de tipo do NextAuth para incluir os campos adicionais no objeto `User`.

```typescript
import { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultSession['user'] {
    access_token: string;
    access_token_expires: number;
    role: 'admin' | 'user';
  }
}
```

#### Passo 4: Configuração das Credenciais

No arquivo de credenciais, configure o provedor de autenticação com as validações necessárias utilizando o `zod`.

```typescript
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { postLogin } from '..';

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
```

### Passo 5: Provedores sociais

Em @/api/auth/providers crie um novo arquivo para adicionar um provedor social. Após configurar arquivo, adicione ele no array de providers situado no arquivo index.ts da mesma página. Exemplo com Google:

```typescript
import Google from 'next-auth/providers/google';

import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from '@/config';

export const google = Google({
  clientId: AUTH_GOOGLE_ID,
  clientSecret: AUTH_GOOGLE_SECRET,
  // Google requires "offline" access_type to provide a `refresh_token`
  authorization: { params: { access_type: 'offline', prompt: 'consent' } },
});
```

### Considerações Finais

Para customizar a configuração de autenticação para o seu contexto específico, siga estes passos:

1. **Configuração de Provedores:** Adicione ou modifique os provedores de autenticação conforme necessário no arquivo `auth.config.ts`.
2. **Estenda a tipagem User:** Adicione ou modifique as propriedades que devem retornar dentro do user de acordo com seu contexto no arquivo `auth.d.ts`.
3. **Paginas Personalizadas:** Se necessário, altere as páginas de login ou outros endpoints.
4. **Callbacks Personalizados:** Modifique os callbacks de JWT e sessão para incluir as informações relevantes do usuário.
