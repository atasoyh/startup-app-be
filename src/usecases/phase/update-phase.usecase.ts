import { Inject, Injectable } from '@nestjs/common';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { Phase } from '../../models/phase.model';

@Injectable()
export class UpdatePhaseUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {}

  async execute(phase: Phase): Promise<Phase> {
    // TODO handle with not found control before!
    return this.phaseRepository.update(phase);
  }
}
