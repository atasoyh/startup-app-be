import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from 'src/interfaces/data/phase-repository.interface';
import {
  TaskRepository,
  TASK_REPOSITORY,
} from '../../interfaces/data/task-repository.interface';
import { CreateTaskInput, Task } from '../../models/task.model';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY) private taskRepository: TaskRepository,
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
  ) {}

  async execute(createTaskInput: CreateTaskInput): Promise<Task> {
    const id = this.taskRepository.generateNewId();
    const newTask = { id, name: createTaskInput.name, completed: false };
    const task = await this.taskRepository.create(newTask);
    const phase = await this.phaseRepository.findById(createTaskInput.phaseId);
    if (!phase) {
      throw new NotFoundException(`Phase ${createTaskInput.phaseId} not found`);
    }
    phase.tasks.push(id);
    await this.phaseRepository.update(phase);
    return task;
  }
}
