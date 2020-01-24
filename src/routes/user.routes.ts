import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get("/profile", userController.profile);

router.get("/test", userController.test);
export default router;
