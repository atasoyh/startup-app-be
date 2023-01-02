import { forwardRef, Inject, Injectable } from '@nestjs/common';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from 'src/interfaces/data/task-repository.interface';
import { Task } from 'src/models/task.model';

@Injectable()
export class ListTasksUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private taskRepository: TaskRepository,
  ) {
    console.log('listATskusecase is created');
  }

  async execute(): Promise<Task[]> {
    console.log('ListTasksUseCase ');
    return this.taskRepository.findAll();
  }
}
