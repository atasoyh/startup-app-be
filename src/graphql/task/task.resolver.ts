import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from '../../models/task.model';
import { ListTasksUseCase } from '../../usecases/task/list-tasks.usecase';
import { CreateTaskUseCase } from '../../usecases/task/create-task.usecase';
import { UpdateTaskUseCase } from '../../usecases/task/update-task.usecase';
import { DeleteTaskUseCase } from '../../usecases/task/delete-task.usecase';

@Resolver('Task')
export class TaskResolver {
  constructor(
    private listTasksUseCase: ListTasksUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    private updateTaskUseCase: UpdateTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
  ) {
    console.log('task resolver initialised', this.listTasksUseCase);
  }

  @Query('tasks')
  async tasks(): Promise<Task[]> {
    console.log('tasks calisti mi');
    return await this.listTasksUseCase.execute();
  }

  @Mutation('createTask')
  async createTask(
    @Args('name') name: string,
    @Args('phaseId') phaseId: string,
  ): Promise<Task> {
    return this.createTaskUseCase.execute({ name, phaseId });
  }

  @Mutation('updateTask')
  async updateTask(
    @Args('id') id: string,
    @Args('completed') completed: boolean,
  ): Promise<Task> {
    return this.updateTaskUseCase.execute({ id, completed });
  }

  @Mutation('deleteTask')
  async deleteTask(@Args('id') id: string): Promise<Task> {
    return this.deleteTaskUseCase.execute(id);
  }
}
