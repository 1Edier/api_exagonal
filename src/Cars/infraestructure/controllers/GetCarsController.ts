// GetCarsController.ts
import { Request, Response } from "express";
import { GetCars } from "../../application/services/GetCars";

export class GetCarsController {
  constructor(private readonly getCars: GetCars) {}

  async run(req: Request, res: Response) {
    try {
      const cars = await this.getCars.run();
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "An error occurred",
        msn: error,
      });
    }
  }
}