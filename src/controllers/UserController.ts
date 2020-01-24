import { Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";
import BaseController from "./BaseController";

class UserController extends BaseController {
  private userRepo: UserRepository;

  constructor() {
    super();
    this.userRepo = new UserRepository();
  }

  profile = async (req: Request, res: Response) => {
    if (req.headers && req.headers.authorization) {
      try {
        const userId = await this.getUserIdByToken(req.headers.authorization);
        console.log(userId);
        if (userId) {
          const user = await this.userRepo.findUserByIdWithPosts(userId);
          delete user.password;
          return res.json(user);
        } else {
          res.status(400).json({ message: "User by token not found" });
        }
      } catch (error) {
        return res.json({ error: "User not found" });
      }
    }
  };

  test = async (req: Request, res: Response) => {
    try {
      let post = await this.userRepo.createPost();
      res.json(post);
    } catch (err) {
      res.json({ err });
    }
  };
}

export default UserController;
