# Gitflow

## Branches de desenvolvimento

Devem ser criadas a partir da develop **develop**. Elas podem ser:

- `build`: Mudanças que afetam o sistema de compilação ou dependências externas (exemplo de escopos: gulp, brócolis, npm)
- `chore`: Mudanças que atualizam tarefas pesadas, etc. Nenhuma mudança no código de produção. Nada que um usuário externo veria
  - implementação (de um recurso existente, que não envolve correção),
  - configuração (como .gitignore ou .gitattributes),
  - métodos internos privados
- `ci`: Mudanças em nossos arquivos e scripts de configuração de CI
- `docs`: Alterações na documentação
- `feat`: Uma nova funcionalidade
- `fix`: A correção de um bug
- `perf`: Uma mudança de código que melhora o desempenho
- `refactor`: Uma mudança de código que não corrige um bug nem adiciona um recurso
- `revert`: Uma alteração de código que reverte quaisquer alterações feitas no passado
- `style`: Mudanças que não afetam o significado do código (espaço em branco, formatação, falta de ponto e vírgula, etc)
- `test`: Adicionando testes ausentes ou corrigindo testes existentes

Após a conclusão da tarefa, o desenvolvedor deverá abrir um pull request para Develop e aguardar o Code Review pela quantidade de desenvolvedores definida no início do projeto.

## **Develop**

Nenhum desenvolvedor poderá fazer upload de código diretamente neste branch.

Uma vez aprovado o pull request, ele deverá ser incorporado a esta branch que servirá como a versão de desenvolvimento.

## **Homolog**

Como o desenvolvimento já possui todas as funcionalidades mapeadas para uma versão específica, crie uma ramificação release/1.0.0 ([Versão semântica](https://semver.org/)). Criado este branch de lançamento, vá para um ambiente de aprovação (homolog) (que não é de desenvolvimento/teste). O ideal é que esse ambiente seja acessível apenas internamente, na rede ou atrás de uma autenticação onde restrinja o acesso externo. Em cada ambiente também é ideal ter um banco de dados próprio para não alterar seus dados de produção.

## **Production**

Atestado (aprovado) pelo QA, faça merge na branch main.

Referências:

- [Fluxo de trabalho de Gitflow | Atlassian Git Tutorial](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

## Estrutura de commits

Os commits devem seguir as guidelines do Conventional Commits

- [CommitLint](https://github.com/conventional-changelog/commitlint)
- [Semantic Commit Messages](docs/semantic-commit-messages.md)
