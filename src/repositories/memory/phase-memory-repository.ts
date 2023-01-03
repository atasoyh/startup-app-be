import { Injectable } from '@nestjs/common';
import { PhaseRepository } from '../../interfaces/data/phase-repository.interface';
import { Phase } from '../../models/phase.model';

@Injectable()
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

  async findByIds(ids: string[]): Promise<Phase[]> {
    return this.phases.filter((phase) => ids.includes(phase.id));
  }

  async create(phase: Phase): Promise<Phase> {
    this.phases.push(phase);
    return phase;
  }

  async update(phase: Phase): Promise<Phase> {
    const index = this.phases.findIndex((t) => t.id === phase.id);
    if (index >= 0) {
      this.phases[index] = { ...this.phases[index], ...phase };
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
