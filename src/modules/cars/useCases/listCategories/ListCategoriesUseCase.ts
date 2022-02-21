import { ICategoriesRepository } from "@repositories/ICategoriesRepository";
import { Category } from "src/modules/cars/entities/Category";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.load();
    return categories;
  }
}

export { ListCategoriesUseCase };
