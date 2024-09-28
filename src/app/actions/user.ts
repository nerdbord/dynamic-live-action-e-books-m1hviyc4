
import { type User } from '@prisma/client';
import prisma from './prisma';

export type UpdateUserPayload = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
  return await prisma.user.create({
    data,
  });
}

export async function updateUser(id: string, data: UpdateUserPayload): Promise<User | null> {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string): Promise<User | null> {
  return await prisma.user.delete({
    where: { id },
  });
}

export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}
