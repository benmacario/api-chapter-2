import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCases } from "./ListCarsUseCases";

let listCarsUseCase: ListCarsUseCases;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCases(carsRepositoryInMemory);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "HB20",
      description: "Carro paia",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "hindai",
      category_id: "f8d3071f-3bf2-4951-ab01-cd8a33efeff8",
    });

    const cars = await listCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });
});
