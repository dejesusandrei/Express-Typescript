import { Request, Response } from "express";
import * as userService from '../service/user.service'

export const getUser = (req: Request, res: Response) => {
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

  if (!user) {
    res.status(404).json({message: "User not found"});
    return;
  }

  res.status(200).json({ user });
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = userService.createUser(name, email);

  res.status(201).json({ user });
};
