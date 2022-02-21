import { CreateSpecificationController } from "@useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";

const specificationRoutes = Router();

const createSpacificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpacificationController.handle);

export { specificationRoutes };
