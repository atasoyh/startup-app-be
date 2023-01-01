import {
  CreatePhaseInput,
  Phase,
  UpdatePhaseInput,
} from '../../models/phase.model';

export interface PhaseRepository {
  findAll(): Promise<Phase[]>;
  findById(id: string): Promise<Phase | undefined>;
  create(phaseInput: CreatePhaseInput): Promise<Phase>;
  update(phaseInput: UpdatePhaseInput): Promise<Phase>;
  delete(id: string): Promise<Phase>;
  generateNewId(): string;
}