import { Router } from "express";

import { categoriesRoutes } from "@shared/infra/http/routes/categories.routes";
import { specificationRoutes } from "@shared/infra/http/routes/specifications.routes";
import { usersRoutes } from "@shared/infra/http/routes/users.routes";

import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
