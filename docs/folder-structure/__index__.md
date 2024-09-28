# Arquitetura de pastas global

```
--github
  +-- workflows        # workflows para os diferentes ambientes
--husky
--cypress
--docs
--public              # a pasta de assets deve conter todos os tipos de imagens locais
--src
  |
  +-- api             # chamadas de funções de requisições, queries, mutations para os endpoints
  |   +-- documentação dedicada!
  |
  +-- app             # componentes compartilhados usados em toda a aplicação
  |   +-- documentação dedicada!
  |
  +-- components      # componentes compartilhados usados em toda a aplicação
  |   +-- ui          # pasta onde os componentes shadcn são instalados
  |
  +-- config           # todas as configurações globais, variáveis de ambiente, etc.
  |
  +-- hooks           # hooks compartilhados usados em toda a aplicação
  |   +-- utils       # hooks utilitários comuns
  |
  +-- lib             # configurações de bibliotecas externas e provedores
  |   +-- providers   # exporta o provedor global
  |
  +-- modules         # pastas baseadas em módulos
  |   +-- documentação dedicada!
  |
  +-- styles          # estilos e variantes do tema da aplicação
  |
  +-- types           # tipos base usados em toda a aplicação
  |
  +-- utils           # funções utilitárias compartilhadas
  |   +-- functions   # funções comuns compartilhadas
  |   +-- static      # valores estáticos/mock compartilhados
  |   +-- formatters  # formatters compartilhados
  |   +-- parser      # parses compartilhados
  |   +-- regex       # regex compartilhados
  |
  +- auth.config.ts    # documentação dedicada!
  |
  +- auth.ts          # documentação dedicada!
  |
  +- middleware.ts    # documentação dedicada!
```
