import { Router, Request, Response } from "express";
import { users } from "../utils/db";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authRouter = Router();

authRouter.post("/login", (req: Request, res: Response) => {
  const username = (req.body.username as string) || "";
  const password = (req.body.password as string) || "";

  const user = users.find((user) => {
    return user.username === username && user.role === "admin";
  });

  if (!user) {
    return res.status(404).json({
      message: "Invalid username or password",
    });
  }

  if (user.password !== password) {
    return res.status(404).json({
      message: "Invalid username or password",
    });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, name: user.name },
    process.env.SECRET_KEY as string,
    { expiresIn: "900000" }
  );

  return res.json({
    message: "login successfully",
    token,
  });
});

export default authRouter;
