import { MissingParametersError, OperationFailedError } from "../../errors";
import { PostsRepository } from "../../repositories/posts-repository";

interface CreatePostRequest {
  title: string;
  content: string;
}

export class CreatePostService {
  constructor(private postsRepository: PostsRepository) {}

  async execute({ title, content }: CreatePostRequest) {
    if (!title) throw new MissingParametersError("Title is required");
    if (!content) throw new MissingParametersError("Content is required");

    try {
      await this.postsRepository.create({ title, content });
    } catch (error) {
      throw new OperationFailedError("Failed to create post");
    }
  }
}
