## Estrutura da pasta @/app

1. Estrutura básica

```
-- app
   |
   +-- layout.tsx               # Layout global aplicado a todas as rotas
   +-- page.tsx                 # Página inicial (rota raiz '/')
   +-- dashboard                # Pasta que representa a rota '/dashboard'
   |   +-- layout.tsx           # Layout aplicado à rota '/dashboard'
   |   +-- page.tsx             # Página renderizada em '/dashboard'
   |   +-- settings             # Subrota '/dashboard/settings'
   |       +-- page.tsx         # Página renderizada em '/dashboard/settings'
   |       +-- layout.tsx       # Layout específico para '/dashboard/settings'
   |
   +-- about                    # Pasta que representa a rota '/about'
       +-- page.tsx             # Página renderizada em '/about'
```

2. Rotas agrupadas

```
-- app
   |
   +-- (privado)                # Grupo de rotas privado
   |   |
   |   +-- dashboard
   |   |     +-- layout.tsx     # layout específico para dashboard
   |   |     +-- page.tsx       # rota /dashboard
   |   |
   |   +-- settings
   |   |      +-- layout.tsx    # layout específico para settings
   |   |      +-- page.tsx      # rota /settings
   |   |
   |   +-- layout.tsx           # layout do agrupamento privado
   |
   +-- (marketing)              # Grupo de rotas para marketing
   |   |
   |   +-- blog
   |   |     +-- layout.tsx     # layout específico para blog
   |   |     +-- page.tsx       # rota /blog
   |   |
   |   +-- post
   |   |      +-- layout.tsx    # layout específico para post
   |   |      +-- page.tsx      # rota /post
   |   |
   |   +-- layout.tsx           # layout do agrupamento marketing
   |
   +-- page.tsx                 # rota /
   +-- layout.tsx               # layout global
```

3. Rotas dinâmicas

```
-- app
   |
   +-- (marketing)              # Grupo de rotas para marketing
   |   |
   |   +-- blog
   |   |     +-- layout.tsx     # Layout específico para blog
   |   |     +-- page.tsx       # rota /blog
   |   |     +-- [id]   # segmento dinâmico
   |   |          +-- page.tsx    # rota /blog/[id]
   |   |          +-- layout.tsx  # layout específico para blog/[id]
   |   |
   |   +-- post
   |   |      +-- layout.tsx    #layout específico para post
   |   |      +-- page.tsx      # rota /post
   |   |      +-- [...slug]     # segment dinâmico que pega todos os segmentos subsequentes
   |   |           +-- page.tsx     # rota /post/[...slug]
   |   |           +-- layout.tsx   # layout específico para post/[...slug]
   |   |
   |   +-- layout.tsx           # layout do agrupamento marketing
   |
   +-- page.tsx # rota /
   +-- layout.tsx               # layout global
```

4. Tratamento de erros

```
-- app
   |
   +-- (marketing)            # Grupo de rotas para marketing
   |   |
   |   +-- blog
   |        +-- layout.tsx    # Layout específico para blog
   |        +-- page.tsx      # rota /blog
   |        +-- error.ts      #rota dedicada para tratamento de error
   |
   |
   +-- page.tsx               # rota /
   +-- layout.tsx             # layout global
```

5. Loading por rota (Suspense API)

```
-- app
   |
   +-- (marketing)            # Grupo de rotas para marketing
   |   |
   |   +-- blog
   |        +-- layout.tsx    # Layout específico para blog
   |        +-- page.tsx      # rota /blog
   |        +-- loading.ts      #rota dedicada para loading
   |
   |
   +-- page.tsx               # rota /
   +-- layout.tsx             # layout global
```

6. Rotas paralelas: Simultaneamente ou condicionalmente renderizar uma ou mais páginas dentro de um mesmo layout.

```
-- app
   +-- @team
   |   +-- default.tsx    #fallback durante carregamento inicial
   |   +-- page.tsx
   |
   +-- @analytics
   |   +-- default.tsx    #fallback durante carregamento inicial
   |   +-- page.tsx
   |
   +-- default.tsx        #fallback durante carregamento inicial
   +-- page.tsx           # rota /
   +-- layout.tsx         # layout global
```

```typescript
export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
```

\*Exemplos de situações de uso:

1. [Rotas condicionais (role based)](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes)
2. [Tabs](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#tab-groups)
3. [Modal](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals)
