// dependencies.ts
import { CreateUser } from "../application/services/CreateUser";

import { CreateUserController } from "./controllers/CreateUserController";

import { MySqlUser } from "./dBRepository/MySqlUser";

const mySqlUser = new MySqlUser();



const createUser = new CreateUser(mySqlUser);



export const createUserController = new CreateUserController(createUser);
