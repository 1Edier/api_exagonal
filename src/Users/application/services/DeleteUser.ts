// DeleteUser.ts
import { UserRepository } from "../../domain/repository/UserRepository";

export class DeleteUser {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userId: number): Promise<string> {
    try {
      await this.userRepository.deleteById(userId);
      return "User deleted";
    } catch (error) {
      return "Error deleting user";
    }
  }
}
