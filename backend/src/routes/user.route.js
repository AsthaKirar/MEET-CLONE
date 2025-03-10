import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import * as userMiddleware from "../middlewares/user.middleware.js";

const router = Router();

router.post(
  "/register",
  userMiddleware.registerUserValidation,
  userController.createUserController
);

router.post(
  "/login",
  userMiddleware.loginUserValidation,
  userController.loginUserController
);

export default router;
