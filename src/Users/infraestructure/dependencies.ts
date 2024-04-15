// dependencies.ts
import { CreateUser } from "../application/services/CreateUser";
import { DeleteUser } from "../application/services/DeleteUser";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { MySqlUser } from "./dBRepository/MySqlUser";
import { GetUsers } from "../application/services/GetUsers";
import { GetUsersController } from "./controllers/GetUsersController";
const mySqlUser = new MySqlUser();



const createUser = new CreateUser(mySqlUser);
const deleteUser = new DeleteUser(mySqlUser);
const getUsers = new GetUsers(mySqlUser);
 
export const createUserController = new CreateUserController(createUser);
export const deleteUserController = new DeleteUserController(deleteUser);
export const getUsersController = new GetUsersController(getUsers);

