import { db } from "../../adapters/db";
import {
  CreatePostData,
  Post,
  PostsRepository,
  UpdatePostData,
} from "../../repositories/posts-repository";

export class PrismaPostsRepository implements PostsRepository {
  async create(data: CreatePostData): Promise<void> {
    await db.post.create({ data });
  }

  async getAll(): Promise<Post[]> {
    return await db.post.findMany();
  }

  async getById(id: string): Promise<Post | null> {
    return await db.post.findUnique({
      where: { id },
    });
  }

  async getByQuery(query: string): Promise<Post[] | null> {
    return await db.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: query,              
              mode: "insensitive",
            },
          },
        ],
      },
    });
  }

  async update(data: UpdatePostData): Promise<void> {
    await db.post.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.content && { content: data.content }),
      },
    });
  }

  async delete(id: string): Promise<void> {
    await db.post.delete({
      where: { id },
    });
  }
}
