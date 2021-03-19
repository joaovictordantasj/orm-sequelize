# orm-sequelize

### Comando para iniciar o projeto:

```shell
npm install
```
ou
```shell
yarn install
```
---

### Comando para criar um model com o sequelize:

```shell
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```
### Comando para fazer uma migration com o sequelize:

```shell
npx sequelize-cli db:migrate
```
---

### Comando para criar um seed para popular dados no banco com o sequelize:

```shell
npx sequelize-cli seed:generate --name demo-pessoa
```

### Comando para popular dados com sequelize:

```shell
npx sequelize-cli db:seed:all 
```