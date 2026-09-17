import type { User } from '../types/User'

const users: User[] = [];

export const findAll = async (): Promise<User[]> => {
  return users;
};

export const findById = async (id: string): Promise<User | undefined> => {
  return users.find(user => user.id === id);
};

export const create = async (user: User): Promise<User> => {
  users.push(user);

  return user;
}