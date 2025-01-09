import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { GetAllPostsService } from "../../services/posts/get-all-posts";

export const getAllPosts = async (_req: Request, res: Response) => {
  const prismaPostRepository = new PrismaPostsRepository();
  const getAllPosts = new GetAllPostsService(prismaPostRepository);

  try {
    const posts = await getAllPosts.execute();
    res.status(200).send(posts);
  } catch (error: any) {
    //TODO - Create a custom error handler to handle status code and error messages
    res.status(400).send({
      error: error.message
    })
  }
}