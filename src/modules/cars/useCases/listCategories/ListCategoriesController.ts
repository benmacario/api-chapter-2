import { ListCategoriesUseCase } from "@useCases/listCategories/ListCategoriesUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCaregoriesUseCase = container.resolve(ListCategoriesUseCase);
    const listCategoriesAll = await listCaregoriesUseCase.execute();

    return response.status(200).json(listCategoriesAll);
  }
}

export { ListCategoriesController };
