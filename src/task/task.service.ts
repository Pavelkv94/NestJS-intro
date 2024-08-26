import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private TASKS = [{ id: 1, name: 'Record', isDone: false }];

  getAll() {
    return this.TASKS;
  }

  create(dto: TaskDto) {
    this.TASKS.push({
      id: this.TASKS.length,
      isDone: false,
      name: dto.name,
    });

    return this.TASKS;
  }

  toggle(id: string) {
    const task = this.TASKS.find((el) => el.id === +id);
    task.isDone = !task.isDone;

    return task;
  }
}
