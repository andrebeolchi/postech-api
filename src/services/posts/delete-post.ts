import { PostsRepository } from "../../repositories/posts-repository";

export class DeletePostService {
  constructor(
    private postsRepository: PostsRepository
  ) {}

  async execute(id: string) {
    if (!id) throw new Error("ID is required");

    await this.postsRepository.delete(id);
  }
}