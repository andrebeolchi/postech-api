import { Request, Response } from "express";

import { PrismaPostsRepository } from "../../repositories/prisma/prisma-posts-repository";
import { UpdatePostService } from "../../services/posts/update-post";

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const prismaPostRepository = new PrismaPostsRepository();
  const updatePost = new UpdatePostService(prismaPostRepository);

  await updatePost.execute({ id, title, content });
  res.status(200).send();
};
