import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTaskInput, Task } from '../../models/task.model';
import { ListTasksUseCase } from '../../usecases/task/list-tasks.usecase';
import { CreateTaskUseCase } from '../../usecases/task/create-task.usecase';
import { UpdateTaskUseCase } from '../../usecases/task/update-task.usecase';
import { DeleteTaskUseCase } from '../../usecases/task/delete-task.usecase';
import { GetTaskByIdUseCase } from 'src/usecases/task/get-task-by-id.usecase';

@Resolver('Task')
export class TaskResolver {
  constructor(
    private getTaskByIdUseCase: GetTaskByIdUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    private updateTaskUseCase: UpdateTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
  ) {}

  @Query('task')
  async task(@Args('id') id: string): Promise<Task> {
    return await this.getTaskByIdUseCase.execute(id);
  }

  @Mutation('createTask')
  async createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.createTaskUseCase.execute(input);
  }

  @Mutation('updateTask')
  async updateTask(@Args('input') input: Task): Promise<Task> {
    return this.updateTaskUseCase.execute(input);
  }

  @Mutation('deleteTask')
  async deleteTask(@Args('id') id: string): Promise<Task> {
    return this.deleteTaskUseCase.execute(id);
  }
}
