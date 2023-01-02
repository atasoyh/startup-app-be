import { Inject } from '@nestjs/common';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { Phase } from '../../models/phase.model';

export class DeletePhaseUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {}

  async execute(id: string): Promise<Phase> {
    return this.phaseRepository.delete(id);
  }
}
