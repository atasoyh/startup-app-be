import { Phase } from '../../models/phase.model';
import { PhaseRepository } from '../../interfaces/data/phase-repository.interface';

export class ListPhasesUseCase {
  constructor(private phaseRepository: PhaseRepository) {}

  async execute(): Promise<Phase[]> {
    return this.phaseRepository.findAll();
  }
}
