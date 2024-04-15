// dependencies.ts
import { MySqlCar } from "./dBRepository/MySqlCar";
import { CreateCar } from "../application/services/CreateCar";
import { DeleteCar } from "../application/services/DeleteCar";
import { GetCars } from "../application/services/GetCars";
import { CreateCarController } from "./controllers/CreateCarController";
import { DeleteCarController } from "./controllers/DeleteCarController";
import { GetCarsController } from "./controllers/GetCarsController";

const mySqlCar = new MySqlCar(); // Instancia del repositorio de Car para MySQL

const createCar = new CreateCar(mySqlCar); // Servicio para crear un Car
const deleteCar = new DeleteCar(mySqlCar); // Servicio para eliminar un Car
const getCars = new GetCars(mySqlCar); // Servicio para obtener todos los Car

export const createCarController = new CreateCarController(createCar); // Controlador para crear un Car
export const deleteCarController = new DeleteCarController(deleteCar); // Controlador para eliminar un Car
export const getCarsController = new GetCarsController(getCars); // Controlador para obtener todos los Car
