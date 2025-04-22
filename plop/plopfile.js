export default function (plop) {
  plop.setGenerator("DDD", {
    description: "Generate full stack job feature (entity, repository, useCases, hooks, views)",
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
        path: "../output/domain/{{camelCase domain}}/entities/{{camelCase name}}.entity.ts",
        templateFile: "templates/entity.hbs",
      },
      {
        type: "add",
        path: "../output/domain/{{camelCase domain}}/repositories/{{camelCase name}}.repository.ts",
        templateFile: "templates/repository.hbs",
      },
      {
        type: "add",
        path: "../output/application/{{camelCase domain}}/useCases/find{{pascalCase name}}.useCase.ts",
        templateFile: "templates/findUseCase.hbs",
      },
      {
        type: "add",
        path: "../output/application/{{camelCase domain}}/useCases/set{{pascalCase name}}.useCase.ts",
        templateFile: "templates/setUseCase.hbs",
      },
      {
        type: "add",
        path: "../output/application/{{camelCase domain}}/hooks/useFind{{pascalCase name}}.ts",
        templateFile: "templates/useFindHook.hbs",
      },
      {
        type: "add",
        path: "../output/application/{{camelCase domain}}/hooks/use{{pascalCase name}}Mutations.ts",
        templateFile: "templates/useSetHook.hbs",
      },
      {
        type: "add",
        path: "../output/application/{{camelCase domain}}/provider/{{pascalCase name}}Provider.tsx",
        templateFile: "templates/provider.hbs",
      },
      {
        type: "add",
        path: "../output/presentation/views/{{camelCase domain}}/{{pascalCase name}}.tsx",
        templateFile: "templates/view.tsx.hbs",
      },
      {
        type: "add",
        path: "../output/infrastructure/api/{{camelCase domain}}/index.api.ts",
        templateFile: "templates/api.hbs",
      },
      {
        type: "add",
        path: "../output/infrastructure/api/{{camelCase domain}}/mock.api.ts",
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
