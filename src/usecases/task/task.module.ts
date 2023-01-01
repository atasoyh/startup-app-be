import { Module } from '@nestjs/common';
import { ListTasksUseCase } from './list-tasks.usecase';
import { CreateTaskUseCase } from './create-task.usecase';
import { UpdateTaskUseCase } from './update-task.usecase';
import { DeleteTaskUseCase } from './delete-task.usecase';
import { TaskMemoryRepository } from 'src/repositories/memory/task-memory-repository';

@Module({
  providers: [
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    TaskMemoryRepository,
  ],
  exports: [
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
  ],
})
export class TaskModule {}
