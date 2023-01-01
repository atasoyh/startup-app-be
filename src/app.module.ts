import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { TaskModule } from './usecases/task/task.module';
import { PhaseModule } from './usecases/phase/phase.module';

@Module({
  imports: [TaskModule, PhaseModule, GraphqlModule],
})
export class AppModule {}
