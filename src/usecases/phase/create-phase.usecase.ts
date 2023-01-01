import { PhaseRepository } from '../../interfaces/data/phase-repository.interface';
import { CreatePhaseInput, Phase } from '../../models/phase.model';

export class CreatePhaseUseCase {
  constructor(private phaseRepository: PhaseRepository) {}

  async execute(phase: CreatePhaseInput): Promise<Phase> {
    return this.phaseRepository.create(phase);
  }
}
