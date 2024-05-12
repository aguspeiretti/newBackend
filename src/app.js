import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

const app = express();



app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
  origin: 'https://asignador-de-tareas.vercel.app',
  credentials:true
}));

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
