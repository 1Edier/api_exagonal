// DeleteCar.ts
import { CarRepository } from "../../domain/repository/CarRepository";

export class DeleteCar {
  constructor(private readonly carRepository: CarRepository) {}

  async run(carId: number): Promise<string> {
    try {
      await this.carRepository.deleteById(carId);
      return "Car deleted";
    } catch (error) {
      throw new Error("Error deleting car");
    }
  }
}