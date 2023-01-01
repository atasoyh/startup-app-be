import { TaskRepository } from '../../interfaces/data/task-repository.interface';
import { Task, UpdateTaskInput } from '../../models/task.model';

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(taskInput: UpdateTaskInput): Promise<Task> {
    return this.taskRepository.update(taskInput);
  }
}
