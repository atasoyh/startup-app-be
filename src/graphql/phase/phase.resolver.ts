import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePhaseInput, Phase, PhaseDTO } from '../../models/phase.model';
import { ListPhasesUseCase } from '../../usecases/phase/list-phases.usecase';
import { CreatePhaseUseCase } from '../../usecases/phase/create-phase.usecase';
import { UpdatePhaseUseCase } from '../../usecases/phase/update-phase.usecase';
import { DeletePhaseUseCase } from '../../usecases/phase/delete-phase.usecase';
import { GetPhaseByIdUseCase } from '../../usecases/phase/get-phase-by-id.usecase';

@Resolver((of) => PhaseDTO)
export class PhaseResolver {
  constructor(
    private listPhasesUseCase: ListPhasesUseCase,
    private createPhaseUseCase: CreatePhaseUseCase,
    private updatePhaseUseCase: UpdatePhaseUseCase,
    private getPhaseByIdUsecase: GetPhaseByIdUseCase,
    private deletePhaseUseCase: DeletePhaseUseCase,
  ) {}

  @Query((returns) => PhaseDTO)
  async phase(@Args('id') id: string): Promise<PhaseDTO> {
    return this.getPhaseByIdUsecase.execute(id);
  }

  @Mutation((returns) => PhaseDTO)
  async createPhase(@Args('input') input: CreatePhaseInput): Promise<PhaseDTO> {
    return this.createPhaseUseCase.execute(input);
  }

  @Mutation((returns) => PhaseDTO)
  async updatePhase(@Args('input') input: Phase): Promise<Phase> {
    //TODO implement to update order of tasks and name of the phase.
    return null;
  }

  @Mutation((returns) => PhaseDTO)
  async deletePhase(@Args('id') id: string): Promise<Phase> {
    return this.deletePhaseUseCase.execute(id);
  }
}
