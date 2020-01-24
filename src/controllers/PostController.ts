import { Request, Response } from "express";
import { PostRepository } from "../repository/PostRepository";
import BaseController from "./BaseController";
import path = require("path");
import multer = require("multer");
import { Post } from "../entity/Post";

class UserController extends BaseController {
  private postRepository: PostRepository;

  constructor() {
    super();
    this.postRepository = new PostRepository();
  }

  delete = async (req: Request, res: Response) => {
    const post = await this.postRepository.findById(req.params.id);
    if (post) {
      const authUserId = await this.getUserIdByToken(req.headers.authorization);
      if (authUserId === post.userId) {
        await this.postRepository.delete(post);
        res.json({ message: "Post deleted successfully", post: post });
      } else {
        res.status(401).json({
          message:
            "No se puede eliminar este post porque pertenece a otro usuario"
        });
      }
    } else {
      res.json({ error: "Post not found" });
    }
  };

  storage = multer.diskStorage({
    destination: "./public/img/",

    filename: function(req, file, cb) {
      cb(null, "image-" + Date.now() + path.extname(file.originalname));
    }
  });

  upload = multer({
    storage: this.storage,
    limits: { fileSize: 1000000 }
  }).single("myImage");

  create = async (req: Request, res: Response) => {
    const userId = await this.getUserIdByToken(req.headers.authorization);
    this.upload(req, res, (err: any) => {
      // console.log("Request: ", req.body);
      // console.log("Requestfile: ", req.file.filename);
      if (req.file) {
        const post1 = new Post();
        post1.image = req.file.filename;
        post1.created_at = new Date();
        post1.userId = userId;
        this.postRepository.create(post1);
      }

      if (!err) {
        return "OK";
      }
    });
    res.send("OK");
  };
}

export default UserController;
