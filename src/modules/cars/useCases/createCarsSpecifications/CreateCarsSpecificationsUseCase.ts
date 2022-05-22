import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

@injectable()
class CreateCarsSpecificationsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}
  async execute({ car_id, specification_id }: IRequest): Promise<Car> {
    const carsExists = await this.carsRepository.findById(car_id);

    if (!carsExists) {
      throw new AppError("Cars does not exists!", 404);
    }

    const specification = await this.specificationRepository.findByIds(
      specification_id
    );

    carsExists.specification = specification;

    await this.carsRepository.create(carsExists);

    return carsExists;
  }
}

export { CreateCarsSpecificationsUseCase };
