import { CategoriesRepository } from "@repositories/implementations/CategoriesRepository";
import { Category } from "src/modules/cars/entities/Category";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute(): Category[] {
    return this.categoriesRepository.load();
  }
}

export { ListCategoriesUseCase };
