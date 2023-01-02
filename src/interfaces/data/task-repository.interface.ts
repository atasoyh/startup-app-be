import { Task, UpdateTaskInput } from '../../models/task.model';

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface TaskRepository {
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | undefined>;
  create(task: Task): Promise<Task>;
  update(task: UpdateTaskInput): Promise<Task>;
  delete(id: string): Promise<Task>;
  generateNewId(): string;
}
