import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Phase } from '../../models/phase.model';
import { ListPhasesUseCase } from '../../usecases/phase/list-phases.usecase';
import { CreatePhaseUseCase } from '../../usecases/phase/create-phase.usecase';
import { UpdatePhaseUseCase } from '../../usecases/phase/update-phase.usecase';
import { DeletePhaseUseCase } from '../../usecases/phase/delete-phase.usecase';
import { Task } from 'src/models/task.model';

@Resolver((of) => Phase)
export class PhaseResolver {
  constructor(
    private listPhasesUseCase: ListPhasesUseCase,
    private createPhaseUseCase: CreatePhaseUseCase,
    private updatePhaseUseCase: UpdatePhaseUseCase,
    private deletePhaseUseCase: DeletePhaseUseCase,
  ) {}

  @Query((returns) => [Phase])
  async phases(): Promise<Phase[]> {
    return this.listPhasesUseCase.execute();
  }

  @Mutation((returns) => Phase)
  async createPhase(@Args('name') name: string): Promise<Phase> {
    console.log('name geldi', name);
    console.log(this.createPhaseUseCase);
    return this.createPhaseUseCase.execute({ name });
  }

  @Mutation((returns) => Phase)
  async updatePhase(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('tasks') tasks: Task[],
  ): Promise<Phase> {
    return this.updatePhaseUseCase.execute({
      id,
      name,
      tasks: tasks.map((task) => task.id),
    });
  }

  @Mutation((returns) => Phase)
  async deletePhase(@Args('id') id: string): Promise<Phase> {
    return this.deletePhaseUseCase.execute(id);
  }
}
