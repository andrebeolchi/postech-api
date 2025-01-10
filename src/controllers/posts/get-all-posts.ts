import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { GetAllPostsService } from "../../services/posts/get-all-posts";

export const getAllPosts = async (_req: Request, res: Response) => {
  const prismaPostRepository = new PrismaPostsRepository();
  const getAllPosts = new GetAllPostsService(prismaPostRepository);

  const posts = await getAllPosts.execute();
  res.status(200).send(posts);
};
