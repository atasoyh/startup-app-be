import { Inject, Injectable } from '@nestjs/common';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';

@Injectable()
export class ListTasksUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private taskRepository: TaskRepository,
  ) {}

  async execute(ids: string[]): Promise<Task[]> {
    return this.taskRepository.findByIds(ids);
  }
}
