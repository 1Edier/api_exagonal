import { Request, Response } from "express";
import { CreateUser } from "../../application/services/CreateUser";
 // Asegúrate de importar correctamente User desde su ubicación correcta

export class CreateUserController {
  constructor(private readonly createUser: CreateUser) {}

  async run(req: Request, res: Response) {
    try {
      const user = req.body;
      const createdUser = await this.createUser.run(user);

      if (createdUser) {
        console.log("usuario creado exitosamente");
        res.status(200).send(createdUser);
      } else {
        res.status(500).send({
          status: "error",
          data: "No se pudo crear el usuario",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "An error occurred",
        msn: error,
      });
    }
  }
}
