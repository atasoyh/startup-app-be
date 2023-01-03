import { Phase, PhaseDTO } from '../../models/phase.model';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { ListTasksUseCase } from '../task/list-tasks.usecase';

@Injectable()
export class ListPhasesUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
    private listTasksUsecase: ListTasksUseCase,
  ) {}

  async execute(ids: string[]): Promise<PhaseDTO[]> {
    const phases: Phase[] = await this.phaseRepository.findByIds(ids);
    const phasesTasks = await Promise.all(
      phases.map(({ tasks }) => this.listTasksUsecase.execute(tasks)),
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const phaseDTOs = phases.map(({ tasks, ...rest }, index) => {
      return {
        ...rest,
        tasks: phasesTasks[index],
      };
    });
    return phaseDTOs;
  }
}
