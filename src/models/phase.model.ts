export class Phase {
  id: string;
  name: string;
  tasks: string[];
}

export class CreatePhaseInput {
  name: string;
  tasks?: string[];
}

export class UpdatePhaseInput {
  id: string;
  name?: string;
  tasks?: string[];
}
