## Description

The project was built on [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
Once you run the project you can do tests on the api with [graphlq ui](http://localhost:3000/graphql)

## Installation

```bash
$ npm i
```

## Running the app

```bash
# build
$ npm run build

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# e2e tests
$ npm run test:e2e

```

## Note for the repositories.

To store the data, project uses the memory. There is are interfaces for repositories. If we made SQL or NOSQL like DB implementations; there might be small differences on the repository implementations.

The biggest difference would be how we keep the task data  
On the SQL like DB -> Task{companyId, phaseId, name, completed}, Phase{id,companyId, name, dependedPhaseId or phaseIndex}, Company{id, name}
                                                                 or 
                                                                 Phase{id, name}, Company{id, name, phaseIds}

On the NOSQL like DB -> There would be probably a company object which holds all the data inside. Company:{id, name, phases}, Phase:{id, name, tasks:<Task[]>}, and Task{id, name, completed}
