import express from "express";
import ApiError from "../error/ApiError";
import Jwt, { JwtPayload } from "jsonwebtoken";

export default function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  try {
    if (req.method === "OPTIONS") {
      next();
    }
    const token = req.headers.authorization?.split(" ")[1];
    
    if (token === "null") {
      throw ApiError.forbidden("Unauthorized");
    }

    const decoded = Jwt.verify(token as string, "random_secret_key6") as JwtPayload;

    req.locals.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
}
