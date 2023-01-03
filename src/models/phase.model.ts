import { Task } from './task.model';

export class PhaseDTO {
  id: string;
  name: string;
  tasks: Task[];
}

export class Phase {
  id: string;
  name: string;
  tasks: string[];
}

export class CreatePhaseInput {
  name: string;
  companyId: string;
}
