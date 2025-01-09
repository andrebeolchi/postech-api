import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { DeletePostService } from "../../services/posts/delete-post";

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const prismaPostRepository = new PrismaPostsRepository();
  const getPostById = new DeletePostService(prismaPostRepository);

  try {
    const post = await getPostById.execute(id);
    res.status(200).send(post);
  } catch (error: any) {
    //TODO - Create a custom error handler to handle status code and error messages
    res.status(400).send({
      error: error.message
    })
  }
}