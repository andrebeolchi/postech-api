import { Post, PostsRepository } from "../../repositories/posts-repository";

export class GetAllPostsService {
  constructor(
    private postsRepository: PostsRepository
  ) { }

  async execute(): Promise<Post[]> {
    return await this.postsRepository.getAll();
  }
}