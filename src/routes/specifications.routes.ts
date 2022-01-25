import { createSpacificationController } from "@useCases/createSpecification";
import { Router } from "express";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpacificationController.handle(request, response);
});

export { specificationRoutes };
