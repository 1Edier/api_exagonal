// CreateCarController.ts
import { Request, Response } from "express";
import { CreateCar } from "../../application/services/CreateCar";
import { Car } from "../../domain/entities/Car";

export class CreateCarController {
  constructor(private readonly createCar: CreateCar) {}

  async run(req: Request, res: Response) {
    try {
      const carData = req.body;
      const car = new Car(carData.id_cars, carData.brand, carData.model, carData.price);
      const createdCar = await this.createCar.run(car);
      res.status(201).json(createdCar);
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "An error occurred",
        msn: error,
      });
    }
  }
}