// car-router.ts
import express from "express";
import { createCarController, deleteCarController, getCarsController } from "./dependencies";

const carRouter = express.Router();

carRouter
  .post("/", createCarController.run.bind(createCarController)) // Endpoint para crear un auto
  .delete("/:id", deleteCarController.run.bind(deleteCarController)) // Endpoint para eliminar un auto por ID
  .get("/", getCarsController.run.bind(getCarsController)); // Endpoint para obtener todos los autos

export { carRouter };
