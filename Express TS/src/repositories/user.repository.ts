import type { User } from '../types/User'

const users: User[] = [];

export const findAll = (): User[] => {
  return users;
};

export const findById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const create = (user: User): User => {
  users.push(user);

  return user;
}