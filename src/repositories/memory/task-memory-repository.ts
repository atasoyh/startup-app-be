import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../interfaces/data/task-repository.interface';
import { Task } from '../../models/task.model';

@Injectable()
export class TaskMemoryRepository implements TaskRepository {
  private tasks: Task[] = [];

  generateNewId(): string {
    return `task_${this.tasks.length + 1}`;
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findById(id: string): Promise<Task> {
    return this.tasks.find((task) => task.id === id);
  }
  async findByIds(ids: string[]): Promise<Task[]> {
    return this.tasks.filter((task) => ids.includes(task.id));
  }
  async create(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async update(task: Task): Promise<Task> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index >= 0) {
      this.tasks[index] = { ...this.tasks[index], ...task };
    }
    return this.tasks[index];
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
