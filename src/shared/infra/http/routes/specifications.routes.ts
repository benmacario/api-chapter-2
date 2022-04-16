import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middleware/ensureAuthenticated";

const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

const createSpacificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpacificationController.handle);

export { specificationRoutes };
