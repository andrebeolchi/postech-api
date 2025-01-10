import { Router } from "express";

import { createPost } from "../controllers/posts/create-post";
import { deletePost } from "../controllers/posts/delete-post";
import { getAllPosts } from "../controllers/posts/get-all-posts";
import { getPostById } from "../controllers/posts/get-post-by-id";
import { updatePost } from "../controllers/posts/update-post";
import { getPostsByQuery } from "../controllers/posts/get-posts-by-query";

const router = Router();

router.post("/", createPost);

router.get("/", getAllPosts);

router.get("/search", getPostsByQuery);

router.get("/:id", getPostById);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export { router };
