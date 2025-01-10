import { OperationFailedError } from "../../errors";
import { Post, PostsRepository } from "../../repositories/posts-repository";

export class GetPostByIdService {
  constructor(private postsRepository: PostsRepository) {}

  async execute(id: string): Promise<Post | null> {
    if (!id) throw new Error("ID is required");

    try {
      const post = await this.postsRepository.getById(id);
      return post;
    } catch (error) {
      throw new OperationFailedError("Failed to get post");
    }
  }
}
