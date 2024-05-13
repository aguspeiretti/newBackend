import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://taskfrontend-1.onrender.com",
  credentials: true,
  optionSuccessStatus: 200,
  Headers: true,
  exposedHeaders: "Set-Cookie",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Access-Control-Allow-Origin",
    "Content-Type",
    "Authorization",
  ],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.set("trust proxy", 1);

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
