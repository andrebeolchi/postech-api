import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { CreatePostService } from "../../services/posts/create-post";

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  const prismaPostRepository = new PrismaPostsRepository();
  const createPost = new CreatePostService(prismaPostRepository);

  await createPost.execute({ title, content });
  res.status(201).send();
};
