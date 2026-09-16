import type { User } from '../types/User'

const users: User[] = [];

export const getUsers = () => {
  return users;
};

export const getUserById = (id: string) => {
  return users.find(user => user.id === id);
};

export const createUser = (name: string, email: string) => {
  const user: User = {
    id: crypto.randomUUID(),
    name,
    email
  };

  users.push(user);
  return user;
}