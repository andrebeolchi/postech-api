import { Post, PostsRepository } from "../../repositories/posts-repository";

export class GetPostsByQueryService {
  constructor(private postsRepository: PostsRepository) {}

  async execute(query: string): Promise<Post[] | null> {
    const posts = await this.postsRepository.getByQuery(query);

    return posts;
  }
}
