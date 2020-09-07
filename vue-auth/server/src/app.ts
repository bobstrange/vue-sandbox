import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { verify, sign } from "jsonwebtoken";
import events from "../db/events.json";
import fs from "fs";

const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
  throw new Error("SECRET_KEY must be defined");
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
  });
});

app.get("/dashboard", (req, res) => {
  verify(req.token, secretKey, (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.json({
        events: events,
      });
    }
  });
});

app.post("/register", async (req, res) => {
  if (req.body) {
    return res.sendStatus(401);
  }

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const data = JSON.stringify(user, null, 2);
  try {
    await fs.promises.writeFile("../db/user.json", data);
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
});

app.post("/login", async (req, res) => {
  const userDB: unknown = fs.readFileSync("../db/user.json");
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
    res.sendStatus(401);
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
