import { PostsRepository } from "../../repositories/posts-repository";

interface UpdatePostRequest {
  id: string;
  title: string;
  content: string;
}

export class UpdatePostService {
  constructor(
    private postsRepository: PostsRepository
  ) { }

  async execute({ id, title, content }: UpdatePostRequest) {
    if (!id) {
      throw new Error("ID is required");
    }
    if (!title && !content) {
      throw new Error("Title or content is required");
    }
    await this.postsRepository.update({ id, title, content });
  }
}