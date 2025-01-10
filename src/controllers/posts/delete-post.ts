import { Request, Response } from "express";
import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { DeletePostService } from "../../services/posts/delete-post";

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const prismaPostRepository = new PrismaPostsRepository();
  const getPostById = new DeletePostService(prismaPostRepository);

  const post = await getPostById.execute(id);
  res.status(200).send(post);
}