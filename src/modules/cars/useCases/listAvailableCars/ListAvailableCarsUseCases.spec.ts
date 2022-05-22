import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCases } from "./ListAvailableCarsUseCases";

let listCarsUseCase: ListAvailableCarsUseCases;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCases(carsRepositoryInMemory);
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

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "HB20",
      description: "Carro paia",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "hindai",
      category_id: "f8d3071f-3bf2-4951-ab01-cd8a33efeff8",
    });

    const cars = await listCarsUseCase.execute({
      brand: "hindai",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "HB20",
      description: "Carro paia",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "hindai",
      category_id: "f8d3071f-3bf2-4951-ab01-cd8a33efeff8",
    });

    const cars = await listCarsUseCase.execute({
      name: "HB20",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "HB20",
      description: "Carro paia",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "hindai",
      category_id: "12345",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
