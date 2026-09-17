import type { Task } from '../types/Task'

const tasks: Task[] = [];

export const findAll = (): Task[] => {
  return tasks
};

export const findById = (id: string): Task | undefined => {
  return tasks.find(task => task.id === id);
};

export const create = (task: Task): Task => {
  tasks.push(task);
  return task;
};