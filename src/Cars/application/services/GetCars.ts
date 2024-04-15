// GetCars.ts
import { CarRepository } from "../../domain/repository/CarRepository";
import { Car } from "../../domain/entities/Car";

export class GetCars {
  constructor(private readonly carRepository: CarRepository) {}

  async run(): Promise<Car[]> {
    try {
      const cars = await this.carRepository.getAll();
      return cars;
    } catch (error) {
      throw new Error("Error fetching cars");
    }
  }
}