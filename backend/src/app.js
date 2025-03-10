import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: true, // frontend url
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

export default app;
