import { categoriesRoutes } from "@routes/categories.routes";
import { specificationRoutes } from "@routes/specifications.routes";
import { Router } from "express";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specification", specificationRoutes);

export { router };
