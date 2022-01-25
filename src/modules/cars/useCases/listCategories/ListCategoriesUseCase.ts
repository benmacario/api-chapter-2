import { Category } from "@models/Category";
import { CategoriesRepository } from "@repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute(): Category[] {
    return this.categoriesRepository.load();
  }
}

export { ListCategoriesUseCase };
