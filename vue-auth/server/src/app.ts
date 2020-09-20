import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { verify, sign } from "jsonwebtoken";
import fs from "fs";
import path from "path";
import events from "../db/events.json";
import { SECRET_KEY } from "./config";

declare global {
  namespace Express {
    export interface Request {
      token?: string;
    }
  }
}

const secretKey = SECRET_KEY;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
  });
});

app.get("/dashboard", verifyTokenHandler, (req, res) => {
  if (req.token) {
    verify(req.token, secretKey, (err) => {
      if (err) {
        res.sendStatus(401);
      } else {
        res.json(events);
      }
    });
  }
});

app.post("/register", async (req, res) => {
  if (!req.body) {
    return res.sendStatus(401);
  }

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const data = JSON.stringify(user, null, 2);
  const userDB: unknown = fs.readFileSync(
    path.join(__dirname, "../", "db/user.json")
  );
  const userInfo = JSON.parse(userDB as string);

  const errors = [];
  if (userInfo.email === user.email) {
    errors.push("Eamil already exists");
  }
  if (user.password.length < 8) {
    errors.push("Password too short.");
  }

  if (errors.length) {
    res.status(400).send({ errors });
  } else {
    try {
      await fs.promises.writeFile(
        path.join(__dirname, "../", "db/user.json"),
        data
      );
    } catch (error) {
      console.error(error);
      return res.status(401).json({
        error,
      });
    }

    const token = sign({ user }, secretKey);
    res.json({
      token,
      email: user.email,
      name: user.name,
    });
  }
});

app.post("/login", async (req, res) => {
  const userDB: unknown = fs.readFileSync(
    path.join(__dirname, "../", "db/user.json")
  );
  const userInfo = JSON.parse(userDB as string);
  if (
    req.body?.email === userInfo.email &&
    req.body?.password === userInfo.password
  ) {
    const token = sign({ userInfo }, secretKey);
    res.json({
      token,
      email: userInfo.email,
      name: userInfo.name,
    });
  } else {
    res.status(401).json({ error: "Invalid login. Please try again." });
  }
});

function verifyTokenHandler(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers.authorization;

  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(401);
  }
}
export { app };
