import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayloadRequest {
  sub: string;
}

export const ensureAthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Invalid-token" });
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET_KEY
    ) as IPayloadRequest;

    request.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "expired-token" });
  }
};
