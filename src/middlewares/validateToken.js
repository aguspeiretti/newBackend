import jwt from "jsonwebtoken";
import { login } from "../controllers/auth.controller.js";

import "dotenv/config"



export const authRequiered = (req, res, next) => {
try {
  const { token } = req.cookies;
  
  if (!token) return res.status(401).json({ message: "no token, denegado AQUI" });
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json({ message: "invalid token" });
    console.log(req.cookies);

    req.user = user;

    next();
  });
} catch (error) {
  console.log("error",error);
}
};
