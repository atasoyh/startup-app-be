import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/interfaces/data/task-repository.interface';
import { Task } from 'src/models/task.model';

@Injectable()
export class ListTasksUseCase {
  constructor(private taskRepository: TaskRepository) {
    console.log('listATskusecase is created');
  }

  async execute(): Promise<Task[]> {
    console.log('ListTasksUseCase ');
    return this.taskRepository.findAll();
  }
}
