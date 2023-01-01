import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { PhaseModule } from './phase/phase.module';

@Module({
  imports: [TaskModule, PhaseModule],
})
export class UseCasesModule {}
