import { Module } from '@nestjs/common';
import { TaskModule as TaskRepositoryModule } from 'src/usecases/task/task.module';
import { PhaseModule } from '../phase/phase.module';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [TaskRepositoryModule, PhaseModule],
  providers: [TaskResolver],
})
export class TaskModule {}
