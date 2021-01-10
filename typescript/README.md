## Conceitos typescript

### PASSOS INICIAIS

1. Incialmente precisamos 
 - ` yarn add typescript -D `
 - ` yarn add express `
 - ` yarn tsc --init ` -> Criação da configuração do Arquivo tsconfig
 - Configurar o arquivo tsconfig . . . "outDir": "./dist" (Manter o código mais limpo)

2. Quando usamos o typescript, precisamos fazer uma nova instalação para tipos
da biblioteca como dependência de desenvolvimento.
- ` yarn add -D @types/express `

3. Execução do projeto
- Comando para criar o arquivo executavel .js: `yarn tsc src/index.ts`;
- Com o arquivo tsc criado (1º ítem): `yarn tsc`
- Como o arquivo js criado: `node dist/index.js`

### Quando usar tipagem
Ver arquivo CreateUser.ts

