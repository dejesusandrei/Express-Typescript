import type { Task } from '../types/Task'
import * as taskRepository from '../repositories/task.repository'

export const getTask = () => {
  return taskRepository.findAll();
};

export const getTasksById = (id: string) => {
  return taskRepository.findById(id);
};

export const createTask = (title: string, completed: boolean) => {
  const task: Task = {
    id: crypto.randomUUID(),
    title,
    completed
  };

  return taskRepository.create(task);
}