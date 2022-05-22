import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
  specifications: Specification[] = [];
  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
  async findByIds(id: string[]): Promise<Specification[]> {
    const allSpecificatons = this.specifications.filter((specification) =>
      id.includes(specification.id)
    );

    return allSpecificatons;
  }
}

export { SpecificationRepositoryInMemory };
