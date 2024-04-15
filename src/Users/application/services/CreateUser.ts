// CreateUser.ts
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repository/UserRepository";

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async run(user: User): Promise<User | null> {
    try {
      const userCreated = await this.userRepository.save(user);
      return userCreated;
    } catch (error) {
      return null;
    }
  }
}
