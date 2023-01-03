import { Phase } from '../../models/phase.model';

export const PHASE_REPOSITORY = 'PHASE_REPOSITORY';

export interface PhaseRepository {
  findAll(): Promise<Phase[]>;
  findById(id: string): Promise<Phase | undefined>;
  findByIds(ids: string[]): Promise<Phase[] | undefined>;
  create(phase: Phase): Promise<Phase>;
  update(phase: Phase): Promise<Phase>;
  delete(id: string): Promise<Phase>;
  generateNewId(): string;
}
