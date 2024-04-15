
// DeleteCarController.ts
import { Request, Response } from "express";
import { DeleteCar } from "../../application/services/DeleteCar";

export class DeleteCarController {
  constructor(private readonly deleteCar: DeleteCar) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const carId = parseInt(id);
      const message = await this.deleteCar.run(carId);
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