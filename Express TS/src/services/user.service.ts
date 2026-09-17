import * as userRepository from '../repositories/user.repository'
import type { User } from '../types/User'
import { type CreateUserInput } from '../schema/user.schema'

export const getUsers = (): User[] => {
  return userRepository.findAll();
};

export const getUserById = (id: string): User | undefined => {
  return userRepository.findById(id);
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