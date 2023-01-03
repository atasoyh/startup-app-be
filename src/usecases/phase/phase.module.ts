import { Module } from '@nestjs/common';
import { ListPhasesUseCase } from './list-phases.usecase';
import { CreatePhaseUseCase } from './create-phase.usecase';
import { UpdatePhaseUseCase } from './update-phase.usecase';
import { DeletePhaseUseCase } from './delete-phase.usecase';
import { RepositoryModule } from '../../repositories/memory/repository.module';
import { TaskModule } from '../task/task.module';
import { GetPhaseByIdUseCase } from './get-phase-by-id.usecase';

@Module({
  imports: [RepositoryModule, TaskModule],
  providers: [
    ListPhasesUseCase,
    CreatePhaseUseCase,
    UpdatePhaseUseCase,
    DeletePhaseUseCase,
    GetPhaseByIdUseCase,
  ],
  exports: [
    ListPhasesUseCase,
    CreatePhaseUseCase,
    UpdatePhaseUseCase,
    DeletePhaseUseCase,
    GetPhaseByIdUseCase,
  ],
})
export class PhaseModule {}
