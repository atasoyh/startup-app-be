import { TaskRepository } from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';

export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(id: string): Promise<Task> {
    return this.taskRepository.delete(id);
  }
}
