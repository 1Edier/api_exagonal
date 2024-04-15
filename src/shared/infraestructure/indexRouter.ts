import { userRouter } from './../../Users/infraestructure/user-router';
import { carRouter } from '../../Cars/infraestructure/Car-router';
import { Request, Response, Router } from "express";


const indexRouter = Router();


indexRouter.use(`/user`, userRouter);
indexRouter.use(`/card`, carRouter);


indexRouter.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

export default indexRouter;
