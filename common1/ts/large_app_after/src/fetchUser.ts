import { User } from "../types/user.js";

export const getUserInfo = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:4000/user');
  return await response.json();
};

export const getUserInfoById = async (id: string): Promise<User> => {
  const response = await fetch(`http://localhost:4000/user/${id}`);
  return await response.json();
};

