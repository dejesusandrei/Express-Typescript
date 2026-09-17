import { Request, Response } from "express";
import * as userService from '../services/user.service'

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();

  res.status(200).json({ users });
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== "string") {
    res.status(400).json({ message: "Invalid user id" });
    return;
  }

  const user = userService.getUserById(id);
  res.status(200).json({ user });
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Need naka destructing since data ang pinapasa sa service
  const user = userService.createUser({ name, email });

  res.status(201).json({ user });
};
