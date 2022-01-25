import { Category } from "src/modules/cars/models/Category";

// DTO => Data Trasnfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Category;
  load(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
