import { CategoriesRepository } from "@repositories/implementations/CategoriesRepository";

import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCases } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstace();

const createCategoryUseCase = new CreateCategoryUseCases(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
