import { Inject } from '@nestjs/common';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { Task, UpdateTaskInput } from '../../models/task.model';

export class UpdateTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: TaskRepository,
  ) {}

  async execute(taskInput: UpdateTaskInput): Promise<Task> {
    return this.taskRepository.update(taskInput);
  }
}
