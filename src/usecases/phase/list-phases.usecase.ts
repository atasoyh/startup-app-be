import { Phase } from '../../models/phase.model';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { Inject } from '@nestjs/common';

export class ListPhasesUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {
    console.log('ListPhaseUsecase calisti');
  }

  async execute(): Promise<Phase[]> {
    return this.phaseRepository.findAll();
  }
}
