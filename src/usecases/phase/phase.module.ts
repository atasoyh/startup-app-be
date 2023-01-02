import { Module } from '@nestjs/common';
import { ListPhasesUseCase } from './list-phases.usecase';
import { CreatePhaseUseCase } from './create-phase.usecase';
import { UpdatePhaseUseCase } from './update-phase.usecase';
import { DeletePhaseUseCase } from './delete-phase.usecase';
import { RepositoryModule } from '../../repositories/memory/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [
    ListPhasesUseCase,
    CreatePhaseUseCase,
    UpdatePhaseUseCase,
    DeletePhaseUseCase,
  ],
  exports: [
    ListPhasesUseCase,
    CreatePhaseUseCase,
    UpdatePhaseUseCase,
    DeletePhaseUseCase,
  ],
})
export class PhaseModule {}
