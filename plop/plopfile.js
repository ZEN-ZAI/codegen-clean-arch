export default function (plop) {
  plop.setGenerator("DDD", {
    description: "Generate DDD structure with entity, repository, useCases, hooks, views and other files",
    prompts: [
      {
        type: "input",
        name: "domain",
        message: "What is your domain name (e.g. Order Management)?",
      },
      {
        type: "input",
        name: "name",
        message: "What is your feature name (e.g. jobCard)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../output/{{camelCase domain}}/domain/entities/{{camelCase name}}.entity.ts",
        templateFile: "templates/entity.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/domain/repositories/{{camelCase name}}.repository.ts",
        templateFile: "templates/repository.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/application/useCases/find{{pascalCase name}}.useCase.ts",
        templateFile: "templates/findUseCase.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/application/useCases/set{{pascalCase name}}.useCase.ts",
        templateFile: "templates/setUseCase.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/application/hooks/useFind{{pascalCase name}}.ts",
        templateFile: "templates/useFindHook.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/application/hooks/use{{pascalCase name}}Mutations.ts",
        templateFile: "templates/useSetHook.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/application/provider/{{pascalCase name}}Provider.tsx",
        templateFile: "templates/provider.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/presentation/views/{{pascalCase name}}.tsx",
        templateFile: "templates/view.tsx.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/infrastructure/api/index.api.ts",
        templateFile: "templates/api.hbs",
      },
      {
        type: "add",
        path: "../output/{{camelCase domain}}/infrastructure/api/mock.api.ts",
        templateFile: "templates/mockApi.hbs",
      },
      {
        type: "add",
        path: "../output/shared/utils/GenericProvider.tsx",
        templateFile: "templates/genericProvider.hbs",
      },
    ],
  });
}
