import * as jwt from "jsonwebtoken";
import config from "../config/config";

class BaseController {
  async getUserIdByToken(token) {
    token = token.replace("Bearer ", "");
    let decoded;
    try {
      decoded = jwt.verify(token, config.jwtSecret);
    } catch (e) {
      return null;
    }
    let userId = decoded.userId;
    return userId;
  }
}

export default BaseController;
