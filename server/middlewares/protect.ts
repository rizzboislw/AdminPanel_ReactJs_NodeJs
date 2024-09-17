import jwt from "jsonwebtoken";

export const protect = (req: any, res: any, next: any) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token has invalid format",
    });
  }

  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(
    tokenWithoutBearer,
    process.env.SECRET_KEY as string,
    (err: any, payload: any) => {
      if (err) {
        return res.status(401).json({
          message: "Token is invalid",
        });
      }

      req.user = payload;
      next();
    }
  );
};
