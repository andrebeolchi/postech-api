import { NextFunction, Request, Response } from "express";
import { MissingParametersError, NotFoundError } from "../errors";

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof MissingParametersError) {
    res.status(400).send({
      error: err.message,
    });
  }

  if (err instanceof NotFoundError) {

    console
    res.status(404).send({
      error: err.message,
    });
  }

  res.status(500);
}
