import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { CreatePostService } from "../../services/posts/create-post";

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  const prismaPostRepository = new PrismaPostsRepository();
  const createPost = new CreatePostService(prismaPostRepository);

  try {
    await createPost.execute({ title, content });
    res.status(201).send();
  } catch (error: any) {
    //TODO - Create a custom error handler to handle status code and error messages
    res.status(400).send({
      error: error.message
    })
  }
}