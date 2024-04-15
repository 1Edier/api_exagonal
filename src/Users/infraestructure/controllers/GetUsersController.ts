// GetUsersController.ts
import { Request, Response } from "express";
import { GetUsers } from "../../application/services/GetUsers";

export class GetUsersController {
  constructor( readonly getUsers: GetUsers) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.getUsers.run();
      res.status(200).json(users);
    } catch (error) {
      if (error instanceof SyntaxError) {
        res.status(400).send({
          status: "error",
          message: "Invalid JSON format in response",
        });
      } else {
        res.status(500).send({
          status: "error",
          data: "An error occurred",
          msn: error,
        });
      }
    }
  }
}
