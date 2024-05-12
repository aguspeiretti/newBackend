import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { login } from "../controllers/auth.controller.js";

export const authRequiered = (req, res, next) => {
try {
  const { token } = req.cookies;
  console.log("Authreq" , token);
  if (!token) return res.status(401).json({ message: "no token, denegado" });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json({ message: "invalid token" });
    console.log(req.cookies);

    req.user = user;

    next();
  });
} catch (error) {
  console.log("error",error);
}
};
