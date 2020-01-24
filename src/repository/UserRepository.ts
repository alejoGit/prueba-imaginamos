import { getManager, getRepository } from "typeorm";
import { User } from "../entity/User";
import { Post } from "../entity/Post";
export class UserRepository {
  async createUser(user: User): Promise<User> {
    const userRepo = getRepository(User);
    const newUser = userRepo.create(user);
    newUser.hashPassword();
    await userRepo.save(newUser);
    return newUser;
  }
  async findUserById(userId: number | string) {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne(userId);
    return user;
  }
  async findUserByIdWithPosts(userId: number | string) {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne(userId, {
      relations: ["posts"]
    });
    user.posts.reverse();
    return user;
  }
  async createPost() {
    const user = await this.findUserById(22);

    const post1 = new Post();
    post1.image = "me.jpg";
    post1.created_at = new Date();
    post1.user = user;
    const postRepo = getRepository(Post);
    await postRepo.save(post1);
    return post1;
  }
}
