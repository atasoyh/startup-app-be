import { Inject } from '@nestjs/common';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { Phase, UpdatePhaseInput } from '../../models/phase.model';

export class UpdatePhaseUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {}

  async execute(phase: UpdatePhaseInput): Promise<Phase> {
    return this.phaseRepository.update(phase);
  }
}
