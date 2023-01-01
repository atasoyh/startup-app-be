import { PhaseRepository } from '../../interfaces/data/phase-repository.interface';
import { Phase } from '../../models/phase.model';

export class DeletePhaseUseCase {
  constructor(private phaseRepository: PhaseRepository) {}

  async execute(id: string): Promise<Phase> {
    return this.phaseRepository.delete(id);
  }
}
