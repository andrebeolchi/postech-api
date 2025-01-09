import { Router } from "express";

import { createPost } from "../controllers/posts/create-post";
import { deletePost } from "../controllers/posts/delete-post";
import { getAllPosts } from "../controllers/posts/get-all-posts";
import { getPostById } from "../controllers/posts/get-post-by-id";
import { updatePost } from "../controllers/posts/update-post";

const router = Router();

router.post("/posts", createPost);

router.get("/posts", getAllPosts);

router.get("/posts/:id", getPostById);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

export { router };