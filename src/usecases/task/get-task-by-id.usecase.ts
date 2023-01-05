import { Inject, Injectable } from '@nestjs/common';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';
import { handleNotFound } from '../utils/handle-not-found';

@Injectable()
export class GetTaskByIdUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private taskRepository: TaskRepository,
  ) {}

  async execute(id: string): Promise<Task> {
    const taskPromise = this.taskRepository.findById(id);
    const task = await handleNotFound(taskPromise);
    return task;
  }
}
