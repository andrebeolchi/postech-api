import "express-async-errors";
import express, { Express } from "express";
import dotenv from "dotenv";

import { router as postsRouter } from "./routes/posts";
import errorHandler from "./middlewares/error-handler";

dotenv.config();

export const app: Express = express();

app.use(express.json());

app.use("/posts", postsRouter);

app.use('/status', (req, res) => {
  res.send({
    status: 'OK'
  });
})

app.use('/status-badge', (req, res) => {
  res.send({
    schemaVersion: 1,
    label: "status",
    message: "ok",
    color: "green"
  });
})

app.use(errorHandler);
