import { userRouter } from './../../Users/infraestructure/user-router';

import { Request, Response, Router } from "express";


const indexRouter = Router();


indexRouter.use(`/user`, userRouter);


indexRouter.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

export default indexRouter;
