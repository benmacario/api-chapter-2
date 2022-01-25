import { SpecificationRepository } from "@repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "@useCases/createSpecification/CreateSpecificationUseCase";

import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationRepository.getInstance();

const createSpacificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSpacificationController = new CreateSpecificationController(
  createSpacificationUseCase
);

export { createSpacificationController };
