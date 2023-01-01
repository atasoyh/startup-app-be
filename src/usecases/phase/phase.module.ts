import { Module } from '@nestjs/common';
import { PhaseMemoryRepository } from '../../repositories/memory/phase-memory-repository';
import { ListPhasesUseCase } from './list-phases.usecase';
import { CreatePhaseUseCase } from './create-phase.usecase';
import { UpdatePhaseUseCase } from './update-phase.usecase';
import { DeletePhaseUseCase } from './delete-phase.usecase';

@Module({
  providers: [
    ListPhasesUseCase,
    CreatePhaseUseCase,
    UpdatePhaseUseCase,
    DeletePhaseUseCase,
    PhaseMemoryRepository,
  ],
  exports: [
    ListPhasesUseCase,
    CreatePhaseUseCase,
    UpdatePhaseUseCase,
    DeletePhaseUseCase,
  ],
})
export class PhaseModule {}
