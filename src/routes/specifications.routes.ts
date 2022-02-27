import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";
import { ensureAuthenticated } from "src/middleware/ensureAuthenticated";

const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

const createSpacificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpacificationController.handle);

export { specificationRoutes };
