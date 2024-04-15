
import { db } from "../../../shared/application/mysql";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repository/UserRepository";

export class MySqlUser implements UserRepository {
  getById(userId: number): Promise<User | null> {
    const query = "select * from users where id_user = ?";
    return db.execute(query, [userId]).then((res: any) => {
      console.log(res[0]);
      return res[0][0] as User;
    });
  }
  getAll(): Promise<User[]> {
    const query = "select * from users";
    return db.execute(query).then((res: any) => res[0] as User[]);
  }
  save(user: User): Promise<User> {
    const { name, password } = user;
    const query = "INSERT INTO users (name, password) VALUES (?, ?)";
    return db.execute(query, [name, password]).then((res: any) => {
      const insertedId = res[0].insertId;
      return new User(insertedId, name, password);
    });
  }
  
  
  deleteById(userId: number): Promise<string> {
    const query = "delete from users where id_user = ?";
    return db.execute(query, [userId]).then((res: any) => res[0] as string);
  }
}
