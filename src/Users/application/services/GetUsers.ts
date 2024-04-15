// GetUsers.ts
import { UserRepository } from "../../domain/repository/UserRepository";
import { User } from "../../domain/entities/user";

export class GetUsers {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<User[]> {
    try {
      const users = await this.userRepository.getAll();
      if (users.length==0) {
        throw new Error(`no existen usuarios`);
        
      }
      return users;
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }
}
