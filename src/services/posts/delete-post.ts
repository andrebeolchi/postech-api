import { MissingParametersError, OperationFailedError } from "../../errors";
import { PostsRepository } from "../../repositories/posts-repository";

export class DeletePostService {
  constructor(private postsRepository: PostsRepository) {}

  async execute(id: string) {
    if (!id) throw new MissingParametersError("ID is required");

    try {
      await this.postsRepository.delete(id);
    } catch (error) {
      throw new OperationFailedError("Failed to delete post");
    }
  }
}
