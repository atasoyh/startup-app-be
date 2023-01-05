import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { CreateTaskInput, Task } from '../../models/task.model';
import { handleNotFound } from '../utils/handle-not-found';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: TaskRepository,
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {}

  async execute(createTaskInput: CreateTaskInput): Promise<Task> {
    const phase = await handleNotFound(
      this.phaseRepository.findById(createTaskInput.phaseId),
    );
    const id = this.taskRepository.generateNewId();
    const newTask = { id, name: createTaskInput.name, completed: false };
    const task = await this.taskRepository.create(newTask);
    phase.tasks.push(id);
    await this.phaseRepository.update(phase);
    return task;
  }
}
