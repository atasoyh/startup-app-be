import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TaskModule } from './task/task.module';
import { PhaseModule } from './phase/phase.module';

@Module({
  imports: [
    GraphQL.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
      introspection: true,
      definitions: {
        path: join(process.cwd(), './graphql.ts'),
        outputAs: 'class',
      },
    }),
    TaskModule,
    PhaseModule,
  ],
})
export class GraphqlModule {}
