// user-router.ts

import express from "express";
import {  createUserController } from "./dependencies";

const userRouter = express.Router();

userRouter

  .post("/", createUserController.run.bind(createUserController))


export { userRouter };
