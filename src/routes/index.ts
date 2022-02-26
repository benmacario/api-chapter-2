import { categoriesRoutes } from "@routes/categories.routes";
import { specificationRoutes } from "@routes/specifications.routes";
import { usersRoutes } from "@routes/users.routes";
import { Router } from "express";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);

export { router };
