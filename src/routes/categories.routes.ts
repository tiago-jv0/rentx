import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/Categories.repository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategory.service";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();
  return response.status(200).json(categories);
});

export { categoriesRoutes };
