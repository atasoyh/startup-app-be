import { Module } from '@nestjs/common';
import { TaskMemoryRepository } from './task-memory-repository';
import { PhaseMemoryRepository } from './phase-memory-repository';
import { TASK_REPOSITORY } from '../../interfaces/data/task-repository.interface';
import { PHASE_REPOSITORY } from 'src/interfaces/data/phase-repository.interface';
import { COMPANY_REPOSITORY } from 'src/interfaces/data/company-repository.interface';
import { CompanyMemoryRepository } from './company-memory-repository';

const taskRepositoryProvider = {
  provide: TASK_REPOSITORY,
  useClass: TaskMemoryRepository,
};
const phaseRepositoryProvider = {
  provide: PHASE_REPOSITORY,
  useClass: PhaseMemoryRepository,
};

const companyRepositoryProvider = {
  provide: COMPANY_REPOSITORY,
  useClass: CompanyMemoryRepository,
};

@Module({
  providers: [
    taskRepositoryProvider,
    phaseRepositoryProvider,
    companyRepositoryProvider,
  ],
  exports: [
    taskRepositoryProvider,
    phaseRepositoryProvider,
    companyRepositoryProvider,
  ],
})
export class RepositoryModule {}
