# Estrutura da pasta @/api

```md
-- api
|
+-- **common**
| +- /hooks
| +- index.ts
| +- utils.ts
| +- types.ts
|
+-- <resource>
| +- /hooks
| +- index.ts
| +- endpoints.ts
| +- types.ts
...
```

## Pasta `@/api/__common__`

A pasta `@/api/__common__` é destinada a armazenar todos os recursos genéricos e reutilizáveis relacionados ao consumo de endpoints e outras funcionalidades comuns. Isso inclui:

- Funções Utilitárias (`@/api/__common__/utils.ts`):

  - Funções auxiliares que podem ser usadas em várias partes do projeto.
  - Exemplo: funções para manipulação de dados ou gerenciamento de erros; parseResponse().

- Hooks Genéricos (`@/api/__common__/hooks`):

  - Hooks que implementam lógica de forma reutilizável para diferentes endpoints.
  - Exemplo: usePagination (`@/api/__common__/hooks/usePagination.tsx`).

- Tipagens Genéricas (`@/api/__common__/types.ts`):
  - Tipos e interfaces que são aplicáveis a múltiplos recursos ou endpoints.
  - Exemplo: `PaginatedResponse<T>`, onde T é um tipo genérico para a resposta paginada.

### Observações `@/api/__common__`

- O motivo de agrupar os arquivos index.ts e types.ts que antes ficavam soltos na pasta /api foi com o intuito de criar um contexto onde se trabalha com funcionalidades comuns, dessa forma existe apenas um lugar onde se procurar código útil a qualquer consumo de endpoint.
- Outra vantagem desse contexto onde tudo é "comum" é a liberdade de se criar novas estruturas relacionadas a consumo de endpoints sem medo de perdê-las ao longo do projeto. Exemplo: seria o lugar perfeito para se implementar uma nova abstração do "fetch" ou juntar configurações de consumo de APIs de terceiros, a pasta `__common__`é livre para crescer sem prejudicar a organização do projeto como um todo, desde que mantenha seu objetivo.
- Ao assumir um projeto já em andamento, muitas vezes não sabemos quais tipagens e utilitários já foram implementados, a pasta `__common__` seria o lugar de referência para consultar tudo de genérico que já existe e está relacionado a endpoints.
- O uso do padrão `__common__` ao invés de simplesmente `common` mantém a pasta no topo da lista em `@/api`e à diferencia de todas as outras pastas referentes a endpoints específicos.

## Pastas de Entidades/Recursos `@/api/<resource>`

Cada pasta dentro de `@/api/` representa um recurso ou entidade específica. Dentro dessas pastas, você encontrará todos os arquivos relacionados àquele recurso, incluindo:

- Endpoints (`@/api/<resource>/endpoints.ts`):
  - Funções e variáveis que definem as chamadas para os endpoints do recurso.
  - Exemplo: UserRoutesEnum, getUser e postUser em (`@/api/user/endpoints.ts`).
- Hooks (`@/api/<resource>/hooks`):
  - Hooks específicos para interagir com os endpoints do recurso.
  - Exemplo: useGetUser (`@/api/user/hooks/useGetUser.tsx`), useCreateUser (`@/api/user/hooks/useCreateUser.tsx`).
- Tipagens (`@/api/<resource>/types.ts`):
  - Tipos e interfaces específicos para o recurso.
  - Exemplo: User e CreateUserResponse em (`@/api/user/types.ts`).

### Observações `@/api/<resource>`

- Padrões de nomenclatura (opcional):
  - Estes padrões nos ajudam a identificar os recursos mais rapidamente e facilita a geração de código por templates e scripts.
  - Funções: (nome do método HTTP em lowercase) + (nome do recurso em capitalize). Exemplo: getUser, getUsersById, postUser, patchUser, deleteUser.
  - Hooks: "use" + (Get, Create, Update, Delete) + (termo complementar em capitalize) + (nome do recurso em capitalize). Exemplo: useGetUser, useGetUserById, useGetInfiniteUser useCreateUser, useUpdateUser, useDeleteUser.
- O uso do arquivo `index.ts` para guardar as funções ao invés de apenas exportar recursos por ele, foi pela simplicidade, as pastas estão divididas horizontalmente, então os caminhos na importação da pasta "api" sempre serão curtos e objetivos, não sendo vista a necessidade de criar um arquivo apenas para exportação, independente do número de endpoints dentro de um mesmo recurso da API.

  - Exemplo:

  ```ts
  import { getUser } from '@/api/user/endpoints';
  import { useGetUser } from '@/api/user/hooks';
  import { User } from '@/api/user/types.ts';
  ```

- O motivo por trás da escolha de manter todos os hooks juntos (mutations e querys) dentro de uma única pasta seria para simplificar. Generalizando, não faz sentido usar useQuery para uma função CREATE/UPDATE/DELETE ou então useMutation para um GET, então o nome do hook já sugeriria o que estaria sendo usado, além de naturalmente agrupar todas as "querys" por causa da ordem alfabética (os "useGet" estarão sempre juntos).

  - Exemplo:

  ```md
  +-- hooks
  | +- useDeleteUser.tsx
  | +- useGetUser.tsx (query)
  | +- useGetUserById.tsx (query)
  | +- useGetInfiniteUserById.tsx (query)
  | +- useCreateUser.tsx
  | +- useUpdateUser.tsx
  ```
