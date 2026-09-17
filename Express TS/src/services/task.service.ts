import type { Task } from '../types/Task'
import * as taskRepository from '../repositories/task.repository'
import { type CreateTaskInput } from '../schema/task.schema'
import { AppError } from "../errors/AppError.js";

export const getTask = () => {
  return taskRepository.findAll();
};

export const getTasksById = (id: string) => {
  const task = taskRepository.findById(id);

  if(!task){
    throw new AppError('Task not found', 404);
  }

  return task;
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