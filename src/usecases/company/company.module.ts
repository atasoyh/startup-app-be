import { Module } from '@nestjs/common';

import { RepositoryModule } from '../../repositories/memory/repository.module';
import { PhaseModule } from '../phase/phase.module';
import { TaskModule } from '../task/task.module';
import { CreateCompanyUseCase } from './create-company.usecase';
import { GetCompanyByIdUseCase } from './get-company-by-id.usecase';

@Module({
  imports: [RepositoryModule, PhaseModule, TaskModule],
  providers: [CreateCompanyUseCase, GetCompanyByIdUseCase],
  exports: [CreateCompanyUseCase, GetCompanyByIdUseCase],
})
export class CompanyModule {}
