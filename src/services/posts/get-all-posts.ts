import { OperationFailedError } from "../../errors";
import { Post, PostsRepository } from "../../repositories/posts-repository";

export class GetAllPostsService {
  constructor(private postsRepository: PostsRepository) {}

  async execute(): Promise<Post[]> {
    try {
      return await this.postsRepository.getAll();
    } catch (error) {
      throw new OperationFailedError("Failed to get posts");
    }
  }
}
