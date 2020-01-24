import express = require("express");
import bodyParser = require("body-parser");
import { Application } from "express";
import morgan = require("morgan");

import AuthRoutes from "./routes/auth.routes";
import UserRoutes from "./routes/user.routes";
import PostRoutes from "./routes/post.routes";

import "reflect-metadata";
import { createConnection } from "typeorm";
import cors = require("cors");
const path = require("path");
export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.setupDatabase();
  }
  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser());
    this.app.use(express.static("public"));
    this.app.use(express.static("dist"));
  }
  middlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:8080",
        credentials: true
      })
    );
    this.app.use(morgan("dev"));
  }
  routes() {
    this.app.use("/auth", AuthRoutes);
    this.app.use("/users", UserRoutes);
    this.app.use("/posts", PostRoutes);

    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "/..", "/dist/index.html"));
    });
  }
  setupDatabase() {
    createConnection()
      .then(async connection => {
        console.log("DB connected");
      })
      .catch(error => console.log(error));
  }
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port ", this.app.get("port"));
  }
}
