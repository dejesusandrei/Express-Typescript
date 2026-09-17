import type { Task } from '../types/Task'

const tasks: Task[] = [];

export const findAll = async (): Promise<Task[]> => {
  return tasks
};

export const findById = async (id: string): Promise<Task | undefined> => {
  return tasks.find(task => task.id === id);
};

export const create = async (task: Task): Promise<Task> => {
  tasks.push(task);
  return task;
};