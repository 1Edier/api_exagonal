// DeleteUserController.ts
import { Request, Response } from "express";
import { DeleteUser } from "../../application/services/DeleteUser";

export class DeleteUserController {
  constructor(private readonly deleteUser: DeleteUser) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = parseInt(id);
      const message = await this.deleteUser.run(userId);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "An error occurred",
        msn: error,
      });
    }
  }
}
