import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/Specifications.protocol";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecification.service";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationsRepository.list();
  return response.status(200).json(specifications);
});

export { specificationsRoutes };
