import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { GetPostsByQueryService } from "../../services/posts/get-posts-by-query";

export const getPostsByQuery = async (req: Request, res: Response) => {
  const { query } = req.query;

  const prismaPostRepository = new PrismaPostsRepository();
  const getPostByQuery = new GetPostsByQueryService(prismaPostRepository);

  try {
    const post = await getPostByQuery.execute(query as string || "");
    res.status(200).send(post);
  } catch (error: any) {
    //TODO - Create a custom error handler to handle status code and error messages
    res.status(400).send({
      error: error.message,
    });
  }
};
