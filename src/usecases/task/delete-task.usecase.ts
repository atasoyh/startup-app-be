import { Inject, Injectable } from '@nestjs/common';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';

@Injectable()
export class DeleteTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: TaskRepository,
  ) {}

  async execute(id: string): Promise<Task> {
    return this.taskRepository.delete(id);
  }
}
