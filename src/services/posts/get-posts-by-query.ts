import { OperationFailedError } from "../../errors";
import { Post, PostsRepository } from "../../repositories/posts-repository";

export class GetPostsByQueryService {
  constructor(private postsRepository: PostsRepository) {}

  async execute(query: string): Promise<Post[] | null> {
    try {
      const posts = await this.postsRepository.getByQuery(query);
      return posts;
    } catch (error) {
      throw new OperationFailedError("Failed to get posts");
    }
  }
}
