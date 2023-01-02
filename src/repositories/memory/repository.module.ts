import { Module } from '@nestjs/common';
import { TaskMemoryRepository } from './task-memory-repository';
import { PhaseMemoryRepository } from './phase-memory-repository';
import { TASK_REPOSITORY } from '../../interfaces/data/task-repository.interface';
import { PHASE_REPOSITORY } from 'src/interfaces/data/phase-repository.interface';

const taskRepositoryProvider = {
  provide: TASK_REPOSITORY,
  useClass: TaskMemoryRepository,
};
const phaseReposioryProvider = {
  provide: PHASE_REPOSITORY,
  useClass: PhaseMemoryRepository,
};

@Module({
  providers: [taskRepositoryProvider, phaseReposioryProvider],
  exports: [taskRepositoryProvider, phaseReposioryProvider],
})
export class RepositoryModule {}
