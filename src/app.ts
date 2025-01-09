import express, { Express } from "express";
import dotenv from "dotenv";

import { router as postsRouter } from "./routes/posts";

dotenv.config();

export const app: Express = express();

app.use(express.json());

app.use(postsRouter);