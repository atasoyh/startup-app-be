import { Phase, PhaseDTO } from '../../models/phase.model';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ListTasksUseCase } from '../task/list-tasks.usecase';
import { handleNotFound } from '../utils/handle-not-found';

@Injectable()
export class GetPhaseByIdUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
    private listTasksUsecase: ListTasksUseCase,
  ) {}

  async execute(id: string): Promise<PhaseDTO> {
    const phasePromise = this.phaseRepository.findById(id);
    const phase = await handleNotFound(phasePromise);
    const { tasks: taskIds, ...rest } = phase;
    const tasks = await this.listTasksUsecase.execute(taskIds);
    const phaseDTOs = { tasks, ...rest };
    return phaseDTOs;
  }
}
