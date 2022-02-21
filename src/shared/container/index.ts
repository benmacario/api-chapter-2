import { ICategoriesRepository } from "@repositories/ICategoriesRepository";
import { CategoriesRepository } from "@repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "@repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "@repositories/ISpecificationRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
