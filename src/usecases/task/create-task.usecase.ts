import { PhaseRepository } from 'src/interfaces/data/phase-repository.interface';
import { TaskRepository } from '../../interfaces/data/task-repository.interface';
import { CreateTaskInput, Task } from '../../models/task.model';

export class CreateTaskUseCase {
  constructor(
    private taskRepository: TaskRepository,
    private phaseRepository: PhaseRepository,
  ) {}

  async execute(createTaskInput: CreateTaskInput): Promise<Task> {
    const id = this.taskRepository.generateNewId();
    const newTask = { id, name: createTaskInput.name, completed: false };
    const task = await this.taskRepository.create(newTask);
    const phase = await this.phaseRepository.findById(createTaskInput.phaseId);
    phase.tasks.push(id);
    return task;
  }
}
