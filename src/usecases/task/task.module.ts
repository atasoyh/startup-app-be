import { Module } from '@nestjs/common';
import { ListTasksUseCase } from './list-tasks.usecase';
import { CreateTaskUseCase } from './create-task.usecase';
import { UpdateTaskUseCase } from './update-task.usecase';
import { DeleteTaskUseCase } from './delete-task.usecase';
import { RepositoryModule } from '../../repositories/memory/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
  ],
  exports: [
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
  ],
})
export class TaskModule {}
