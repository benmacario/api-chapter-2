import { AppError } from "@errors/AppError";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";

import { CreateCarsSpecificationsUseCase } from "./CreateCarsSpecificationsUseCase";

describe("Create Car Specification", () => {
  let createCarsSpecificationsUseCase: CreateCarsSpecificationsUseCase;
  let carsRepositoryInMemory: CarsRepositoryInMemory;
  let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarsSpecificationsUseCase = new CreateCarsSpecificationsUseCase(
      carsRepositoryInMemory,
      specificationRepositoryInMemory
    );
  });

  it("should not be able to add a new specification to a now-existent car", async () => {
    const car_id = "12345";
    const specification_id = ["12345"];
    const result = createCarsSpecificationsUseCase.execute({
      car_id,
      specification_id,
    });

    await expect(result).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationRepositoryInMemory.create({
      description: "any_este",
      name: "any_test",
    });

    const specification_id = [specification.id];

    const carsSpecifications = await createCarsSpecificationsUseCase.execute({
      car_id: car.id,
      specification_id,
    });

    expect(carsSpecifications).toHaveProperty("specification");
    expect(carsSpecifications.specification.length).toBe(1);
  });
});
