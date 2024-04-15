// CreateCar.ts
import { Car } from "../../domain/entities/Car";
import { CarRepository } from "../../domain/repository/CarRepository";

export class CreateCar {
  constructor(private readonly carRepository: CarRepository) {}

  async run(car: Car): Promise<Car> {
    try {
      const createdCar = await this.carRepository.create(car);
      return createdCar;
    } catch (error) {
      throw new Error("Error creating car");
    }
  }
}