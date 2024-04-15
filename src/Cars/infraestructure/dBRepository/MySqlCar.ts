// MySqlCar.ts
import { db } from "../../../shared/application/mysql";
import { Car } from "../../domain/entities/Car";
import { CarRepository } from "../../domain/repository/CarRepository";

export class MySqlCar implements CarRepository {
  getAll(): Promise<Car[]> {
    const query = "SELECT * FROM cars";
    return db.execute(query).then((res: any) => res[0] as Car[]);
  }

  create(car: Car): Promise<Car> {
    const { brand, model, price } = car;
    const query = "INSERT INTO cars (brand, model, price) VALUES (?, ?, ?)";
    return db.execute(query, [brand, model, price]).then((res: any) => {
      const insertedId = res[0].insertId;
      return new Car(insertedId, brand, model, price);
    });
  }

  deleteById(carId: number): Promise<string> {
    const query = "DELETE FROM cars WHERE id_cars = ?";
    return db.execute(query, [carId]).then(() => "Car deleted");
  }
}
