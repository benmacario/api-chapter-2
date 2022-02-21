import { Category } from "src/modules/cars/entities/Category";

// DTO => Data Trasnfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  load(): Promise<Category[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
