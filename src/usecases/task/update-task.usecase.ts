import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  MethodNotAllowedException,
} from '@nestjs/common';
import {
  CompanyRepository,
  COMPANY_REPOSITORY,
} from '../../interfaces/data/company-repository.interface';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';
import { handleNotFound } from '../utils/handle-not-found';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';

@Injectable()
export class UpdateTaskUseCase {
  FIRST_INDEX = 0;
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: TaskRepository,
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
    @Inject(COMPANY_REPOSITORY) private companyRepository: CompanyRepository,
  ) {}

  async execute(task: Task): Promise<Task> {
    await handleNotFound(this.taskRepository.findById(task.id));
    const phases = await this.phaseRepository.findAll();
    const phase = phases.find((phase) =>
      phase.tasks.find((id) => id === task.id),
    );
    const companies = await this.companyRepository.findAll();
    const company = companies.find(({ phases }) =>
      phases.find((id) => id === phase.id),
    );
    const phaseIndex = company.phases.indexOf(phase.id);
    if (phaseIndex > this.FIRST_INDEX) {
      const prevPhaseId = company.phases.at(phaseIndex - 1);
      const prevPhase = await this.phaseRepository.findById(prevPhaseId);
      const prevPhasesTasks = await this.taskRepository.findByIds(
        prevPhase.tasks,
      );
      const prevPhaseCompleted = prevPhasesTasks.every(
        (task) => task.completed,
      );
      if (!prevPhaseCompleted) {
        throw new BadRequestException(
          'The task is not editable! Please be sure the previous phase is completed.',
        );
      }
    }
    return this.taskRepository.update(task);
  }
}
