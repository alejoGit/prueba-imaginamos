import { Router } from "express";
import PostController from "../controllers/PostController";
import { checkToken } from "../middlewares/checkToken";

const router = Router();
const postController = new PostController();

router.delete("/:id", checkToken, postController.delete);
router.post("/", checkToken, postController.create);

export default router;
