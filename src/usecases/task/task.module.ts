import { Module } from '@nestjs/common';
import { ListTasksUseCase } from './list-tasks.usecase';
import { CreateTaskUseCase } from './create-task.usecase';
import { UpdateTaskUseCase } from './update-task.usecase';
import { DeleteTaskUseCase } from './delete-task.usecase';
import { RepositoryModule } from '../../repositories/memory/repository.module';
import { GetTaskByIdUseCase } from './get-task-by-id.usecase';

@Module({
  imports: [RepositoryModule],
  providers: [
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    GetTaskByIdUseCase,
  ],
  exports: [
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    GetTaskByIdUseCase,
  ],
})
export class TaskModule {}
