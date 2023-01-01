import { TaskRepository } from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';

export class TaskMemoryRepository implements TaskRepository {
  private tasks: Task[] = [];

  constructor() {
    console.log('constorcutr calisti');
    this.tasks.push({ id: '1', name: 'test 1', completed: false });
    this.tasks.push({ id: '2', name: 'test 2', completed: false });
    this.tasks.push({ id: '3', name: 'test 3', completed: false });
    this.tasks.push({ id: '4', name: 'test 4', completed: false });
    this.tasks.push({ id: '5', name: 'test 5', completed: false });
    this.tasks.push({ id: '6', name: 'test 6', completed: false });
    this.tasks.push({ id: '7', name: 'test 7', completed: false });
    this.tasks.push({ id: '8', name: 'test 8', completed: false });
    console.log(this.tasks);
  }
  generateNewId(): string {
    return `task_${this.tasks.length + 1}`;
  }

  async findAll(): Promise<Task[]> {
    console.log('findAll');
    return this.tasks;
  }

  async findById(id: string): Promise<Task> {
    return this.tasks.find((task) => task.id === id);
  }

  async create(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async update(task: Task): Promise<Task> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index >= 0) {
      this.tasks[index] = task;
    }
    return task;
  }

  async delete(id: string): Promise<Task> {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index >= 0) {
      const task = this.tasks[index];
      this.tasks.splice(index, 1);
      return task;
    }
  }
}
