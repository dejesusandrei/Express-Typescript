import type { Task } from '../types/Task'

const tasks: Task[] = [];

export const getTask = () => {
  return tasks;
};

export const getTasksById = (id: string) => {
  return tasks.find(task => task.id === id);
};

export const createTask = (title: string, completed: boolean) => {
  const task: Task = {
    id: crypto.randomUUID(),
    title,
    completed
  };

  tasks.push(task);
  return task;
}