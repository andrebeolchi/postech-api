import { PostsRepository } from "../../repositories/posts-repository";

interface CreatePostRequest {
  title: string;
  content: string;
}

export class CreatePostService {
  constructor(
    private postsRepository: PostsRepository
  ) { }

  async execute({ title, content }: CreatePostRequest) {
    if (!title) throw new Error("Title is required");
    if (!content) throw new Error("Content is required");

    await this.postsRepository.create({ title, content });
  }
}