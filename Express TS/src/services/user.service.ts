import * as userRepository from '../repositories/user.repository'
import type { User } from '../types/User'
import { type CreateUserInput } from '../schema/user.schema'
import { AppError } from "../errors/AppError.js";

export const getUsers = (): User[] => {
  return userRepository.findAll();
};

export const getUserById = (id: string): User | undefined => {
  const user = userRepository.findById(id);

  if(!user){
    throw new AppError("User not found", 404);
  }

  return user;
};

export const createUser = (data: CreateUserInput): User => {
  const { name, email } = data;

  const user: User = {
    id: crypto.randomUUID(),
    name,
    email
  };

  return userRepository.create(user);
}