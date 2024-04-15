// CarRepository.ts
import { Car } from "../entities/Car";

export interface CarRepository {
  getAll(): Promise<Car[]>;
  create(car: Car): Promise<Car>;
  deleteById(carId: number): Promise<string>;
}
