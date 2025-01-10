import { MissingParametersError, OperationFailedError } from "../../errors";
import { PostsRepository } from "../../repositories/posts-repository";

interface UpdatePostRequest {
  id: string;
  title: string;
  content: string;
}

export class UpdatePostService {
  constructor(private postsRepository: PostsRepository) {}

  async execute({ id, title, content }: UpdatePostRequest) {
    if (!id) {
      throw new MissingParametersError("ID is required");
    }
    if (!title && !content) {
      throw new MissingParametersError("Title or content is required");
    }

    try {
      await this.postsRepository.update({ id, title, content });
    } catch (error) {
      throw new OperationFailedError("Failed to update post");
    }
  }
}
