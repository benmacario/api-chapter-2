import { ListCategoriesUseCase } from "@useCases/listCategories/ListCategoriesUseCase";
import { Request, Response } from "express";

class ListCategoriesController {
  constructor(private readonly listCaregoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const listCategoriesAll = this.listCaregoriesUseCase.execute();

    return response.status(200).json(listCategoriesAll);
  }
}

export { ListCategoriesController };
