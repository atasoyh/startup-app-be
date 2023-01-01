export class Task {
  id: string;
  name: string;
  completed: boolean;
}

export class UpdateTaskInput {
  id: string;
  completed: boolean;
}

export class CreateTaskInput {
  name: string;
  phaseId: string;
}
