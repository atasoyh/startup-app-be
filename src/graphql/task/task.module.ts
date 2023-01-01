import { Module } from '@nestjs/common';
import { UseCasesModule } from 'src/usecases/usecases.module';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [UseCasesModule],
  providers: [TaskResolver],
})
export class TaskModule {}
