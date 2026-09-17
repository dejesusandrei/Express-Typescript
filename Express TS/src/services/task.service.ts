import type { Task } from '../types/Task'
import * as taskRepository from '../repositories/task.repository'
import { type CreateTaskInput } from '../schema/task.schema'
import { AppError } from "../errors/AppError.js";

export const getTask = async (): Promise<Task[]> => {
  return await taskRepository.findAll();
};

export const getTasksById = async (id: string): Promise<Task> => {
  const task = await taskRepository.findById(id);

  if(!task){
    throw new AppError('Task not found', 404);
  }

  return task;
};

export const createTask = async (data: CreateTaskInput): Promise<Task> => {
  const { title, completed } = data;

  const task: Task = {
    id: crypto.randomUUID(),
    title,
    completed
  };

  return await taskRepository.create(task);
}