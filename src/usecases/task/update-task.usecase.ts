import { Inject, Injectable } from '@nestjs/common';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';

@Injectable()
export class UpdateTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: TaskRepository,
  ) {}

  async execute(task: Task): Promise<Task> {
    // TODO handle with not found control before update req.!
    return this.taskRepository.update(task);
  }
}
