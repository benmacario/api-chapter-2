import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";

const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

const createSpacificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpacificationController.handle);

export { specificationRoutes };
