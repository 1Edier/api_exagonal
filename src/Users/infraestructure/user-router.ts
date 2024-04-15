import express from "express";
import { createUserController, deleteUserController, getUsersController } from "./dependencies";

const userRouter = express.Router();

userRouter
  .post("/", createUserController.run.bind(createUserController))
  .delete("/:id", deleteUserController.run.bind(deleteUserController))
  .get("/", getUsersController.run.bind(getUsersController));

export { userRouter };
