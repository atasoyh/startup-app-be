import { PhaseRepository } from '../../interfaces/data/phase-repository.interface';
import { Phase, UpdatePhaseInput } from '../../models/phase.model';

export class UpdatePhaseUseCase {
  constructor(private phaseRepository: PhaseRepository) {}

  async execute(phase: UpdatePhaseInput): Promise<Phase> {
    return this.phaseRepository.update(phase);
  }
}
