import express from "express";
import cors from "cors";
import userRouter from "./routes/users";

const app = express();
const port: number = 4001;

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
