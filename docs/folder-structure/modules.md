## Estrutura da pasta @/modules

```
-- modules
   |
   +-- auth
   +-- private
   |   +-- components
   |   +-- contexts
   |   +-- hooks
   |   +-- utils
   |   +-- pages
   |         +-- Dashboard
   |         |    +-- components
   |         |    |    +-- DashboardTable
   |         |    |        +- DashboardTable.tsx
   |         |    |        +- index.ts
   |         |    +-- hooks
   |         |    +-- utils
   |         |    +- Dashboard.tsx
   |         |    +- index.ts
   |         +-- Profile
   |             +-- components
   |             +-- hooks
   |             +-- utils
   |             +- Profile.tsx
   |             +- index.ts
   +- index.ts
```

## Observações gerais e regras:

1. Nome dos módulos devem ser em lowerCase e camelCase;
2. Caso componente/util/hook for utilizado em mais de um página, subir ele para a hierarquia do módulo;
3. Caso component/util/hook for utilizado em mais de um módulo, subir ele para hierarquia global;
4. Não existe camada de api por módulo nessa estrutura.
