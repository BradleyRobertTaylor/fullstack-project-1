import { NextFunction, Request, Response } from "express";

export const requestLogger = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  console.log("Method:", req.method);
  console.log("Params", req.params);
  console.log("Path:  ", req.path);
  console.log("Body:  ", req.body);
  console.log("---");
  next();
};
