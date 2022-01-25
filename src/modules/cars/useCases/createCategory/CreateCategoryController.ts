import { CreateCategoryUseCases } from "@useCases/createCategory/CreateCategoryUseCase";
import { Request, Response } from "express";

class CreateCategoryController {
  constructor(
    private readonly createCategoryUseCases: CreateCategoryUseCases
  ) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
