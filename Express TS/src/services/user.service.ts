import * as userRepository from '../repositories/user.repository'
import type { User } from '../types/User'
import { type CreateUserInput } from '../schema/user.schema'
import { AppError } from "../errors/AppError.js";

export const getUsers = async (): Promise<User[]> => {
  return await userRepository.findAll();
};

export const getUserById = async (id: string): Promise<User> => {
  const user = await userRepository.findById(id);

  if(!user){
    throw new AppError("User not found", 404);
  }

  return await user;
};

export const createUser = async (data: CreateUserInput): Promise<User> => {
  const { name, email } = data;

  const user: User = {
    id: crypto.randomUUID(),
    name,
    email
  };

  return await userRepository.create(user);
}