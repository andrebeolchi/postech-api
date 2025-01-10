import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { GetPostByIdService } from "../../services/posts/get-post-by-id";

export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const prismaPostRepository = new PrismaPostsRepository();
  const getPostById = new GetPostByIdService(prismaPostRepository);

  const post = await getPostById.execute(id);
  res.status(200).send(post);
};
