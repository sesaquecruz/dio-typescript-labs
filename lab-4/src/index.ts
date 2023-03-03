import express, { Request, Response } from "express";
import Db from "./db/Db";
import User from "./models/User";

const db = new Db();

db.create({
  name: "user 1",
  email: "user1@mail.com",
  address: "1st Usr"
});

const server = express();
server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "The Bank!" });
});

server.get("/user", (req: Request, res: Response) => {
  const users = db.findAll();
  return res.status(200).json(users);
});

server.get("/user/:email", (req: Request, res: Response) => {
  const { email } = req.params;
  const user = db.find(email);

  if(user) 
    return res.status(200).json(user);  

  return res.status(404).json({ message: "user not found" });
});

server.post("/user", (req: Request, res: Response) => {
  const body = req.body;
  const user = db.create(body);

  if(user)
    return res.status(201).json(user);

  return res.status(400).json({ message: "user already exists" });
});

server.put("/user", (req: Request, res: Response) => {
  const body = req.body as User;
  const user = db.update(body);

  if(user)
    return res.status(200).json(user);

  return res.status(400).json({ message: "user not exists" });
});

server.delete("/user", (req: Request, res: Response) => {
  const { email } = req.body;
  const user = db.delete(email);

  if(user)
    return res.status(200);

  return res.status(400).json({ message: "user not exists" });
});

server.listen(5000, () => console.log("server is running"));
