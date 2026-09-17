import * as userRepository from '../repositories/user.repository'
import type { User } from '../types/User'

export const getUsers = (): User[] => {
  return userRepository.findAll();
};

export const getUserById = (id: string): User | undefined => {
  return userRepository.findById(id);
};

export const createUser = (name: string, email: string) => {
  const user: User = {
    id: crypto.randomUUID(),
    name,
    email
  };

  return userRepository.create(user);
}