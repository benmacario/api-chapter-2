import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import {
  CreateUserController,
  UpdateUserAvatarController,
} from "@modules/accounts/useCases";
import { Router } from "express";
import multer from "multer";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
