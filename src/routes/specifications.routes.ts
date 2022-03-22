import { Router } from "express";

import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

const createSpacificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpacificationController.handle);

export { specificationRoutes };
