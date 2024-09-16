import { Router, Request, Response } from "express";
import { users } from "../utils/db";

const userRouter = Router();

userRouter.get("/find", (req: Request, res: Response) => {
  const nameKeyword = (req.query.name as string) || "";
  const ageRange = (req.query.age as string) || "";
  const order = (req.query.order as string) || "";
  const gender = (req.query.gender as string) || "";

  const lowerCaseKeyword = nameKeyword.toLowerCase();

  let minAge: number | null = null;
  let maxAge: number | null = null;

  if (ageRange && ageRange.includes(":")) {
    const [min, max] = ageRange.split(":").map(Number);

    minAge = !isNaN(min) ? min : null;
    maxAge = !isNaN(max) ? max : null;
  }

  let foundUsers = users.filter((user) => {
    const foundNames =
      user.name.toLowerCase().includes(lowerCaseKeyword) ||
      user.username.toLowerCase().includes(lowerCaseKeyword) ||
      user.nickname.toLowerCase().includes(lowerCaseKeyword);

    const foundAges =
      (minAge === null || user.age >= minAge) &&
      (maxAge === null || user.age <= maxAge);

    return foundNames && foundAges;
  });

  if (gender && gender !== "all") {
    foundUsers = foundUsers.filter(
      (user) => user.gender.toLocaleLowerCase() === gender
    );
  }

  if (order) {
    if (order === "asc") {
      foundUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      foundUsers.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  return res.status(200).json({ users: foundUsers });
});

userRouter.get("/u/:username", (req: Request, res: Response) => {
  const fetchedUsername = req.params.username as string;

  const filteredUser = users.find((user) => {
    return user.username === fetchedUsername;
  });

  if (!filteredUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user: filteredUser });
});

export default userRouter;
