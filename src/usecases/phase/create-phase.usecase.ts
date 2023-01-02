import { Inject } from '@nestjs/common';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { CreatePhaseInput, Phase } from '../../models/phase.model';

export class CreatePhaseUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {}

  async execute(phase: CreatePhaseInput): Promise<Phase> {
    return this.phaseRepository.create(phase);
  }
}
