import { Task } from '../../models/task.model';

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface TaskRepository {
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | undefined>;
  findByIds(ids: string[]): Promise<Task[] | undefined>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
  delete(id: string): Promise<Task>;
  generateNewId(): string;
}
