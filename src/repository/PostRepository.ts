import { getManager, getRepository } from "typeorm";

import { Post } from "../entity/Post";
export class PostRepository {
  async findById(postId: number | string) {
    const postRepo = getRepository(Post);
    const post = await postRepo.findOne(postId);
    return post;
  }

  async delete(post: Post) {
    const postRepo = getRepository(Post);
    postRepo.remove(post);
    return post;
  }

  async create(post: Post): Promise<Post> {
    const postRepo = getRepository(Post);
    const newPost = postRepo.create(post);
    await postRepo.save(newPost);
    return newPost;
  }
}
