import { Request, Response } from "express";
import * as taskService from '../service/task.service'

export const getTask = (req: Request, res: Response) => {
  const tasks = taskService.getTask();

  res.status(200).json({ tasks });
};

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== "string") {
    res.status(400).json({ message: "Invalid task id" });
    return;
  }

  const task = taskService.getTasksById(id);

  if (!task) {
    res.status(404).json({message: "Task not found"});
    return;
  }

  res.status(200).json({ task });
};

export const createTask = (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const task = taskService.createTask(title, completed);

  res.status(201).json({ task });
};
