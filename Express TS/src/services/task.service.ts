import type { Task } from '../types/Task'
import * as taskRepository from '../repositories/task.repository'
import { type CreateTaskInput } from '../schema/task.schema'

export const getTask = () => {
  return taskRepository.findAll();
};

export const getTasksById = (id: string) => {
  return taskRepository.findById(id);
};

export const createTask = (data: CreateTaskInput): Task => {
  const { title, completed } = data;

  const task: Task = {
    id: crypto.randomUUID(),
    title,
    completed
  };

  return taskRepository.create(task);
}