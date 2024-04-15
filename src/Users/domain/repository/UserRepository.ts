// UserRepository.ts
import { User } from "../entities/user";

export interface UserRepository {
  getById(userId: number): Promise<User | null>;
  getAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  deleteById(userId: number): Promise<string>;
}
