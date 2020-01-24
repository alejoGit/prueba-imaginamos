import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import config from "../config/config";
import { UserRepository } from "../repository/UserRepository";
import BaseController from "./BaseController";

class AuthController {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  login = async (req: Request, res: Response) => {
    //Valida que se envie usuario y contraseña
    let { email, password } = req.body;
    if (!(email && password)) {
      res
        .status(400)
        .json({ status: "error", message: "Email and password are required" });
    }

    //Obtiene el usuario de la base de datos
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      res.status(401).json({ status: "error", message: "User not found" });
    }

    //Verifica que el password sea el correcto
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).json({
        status: "error",
        message: "The password entered is incorrect"
      });
      return;
    }

    //Creacion del token de acceso
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    res.json({ token: token });
  };

  register = async (req: Request, res: Response) => {
    try {
      let newUser = await this.userRepo.createUser(req.body);
      // res.json({
      //   status: "success",
      //   message: `User ${newUser.email} has been created succesfully`
      // });
      //Creacion del token de acceso
      const token = jwt.sign(
        { userId: newUser.id, email: newUser.email },
        config.jwtSecret,
        { expiresIn: "7d" }
      );
      res.json({ token: token });
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", error: err.code, message: err.message });
    }
  };
}

export default AuthController;
