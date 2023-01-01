import { PhaseRepository } from '../../interfaces/data/phase-repository.interface';
import {
  CreatePhaseInput,
  Phase,
  UpdatePhaseInput,
} from '../../models/phase.model';

export class PhaseMemoryRepository implements PhaseRepository {
  private phases: Phase[] = [];

  generateNewId(): string {
    return `phase_${this.phases.length + 1}`;
  }
  async findAll(): Promise<Phase[]> {
    return this.phases;
  }

  async findById(id: string): Promise<Phase> {
    return this.phases.find((phase) => phase.id === id);
  }

  async create(phaseInput: CreatePhaseInput): Promise<Phase> {
    const phase = { id: '', name: 'test', tasks: [] };
    return phase;
  }

  async update(phaseInput: UpdatePhaseInput): Promise<Phase> {
    const index = this.phases.findIndex((t) => t.id === phaseInput.id);
    if (index >= 0) {
      this.phases[index] = { ...this.phases[index], ...phaseInput };
    }
    return this.phases[index];
  }

  async delete(id: string): Promise<Phase> {
    const index = this.phases.findIndex((phase) => phase.id === id);
    if (index >= 0) {
      const phase = this.phases[index];
      this.phases.splice(index, 1);
      return phase;
    }
  }
}
