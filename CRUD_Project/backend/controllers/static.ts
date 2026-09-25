import { Request, Response } from "express";
import UserModel from "../models/user.js";

export async function HomeUI(req: Request, res: Response): Promise<void> {
  UserModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((e: unknown) => {
      res.status(500).json(e);
    });
}

export async function CreateNewUser(req: Request, res: Response): Promise<void> {
  UserModel.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((e: unknown) => {
      res.status(400).json(e);
    });
}

export async function GetUser(req: Request, res: Response): Promise<void> {
  const id = req.params?.id;
  UserModel.findById(id)
    .then((users) => {
      res.json(users);
    })
    .catch((e: unknown) => {
      res.status(500).json({ error: e });
    });
}

export async function UpdateUser(req: Request, res: Response): Promise<void> {
  const id = req.params?.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  }, { new: true })
    .then((users) => {
      res.json(users);
    })
    .catch((e: unknown) => {
      res.status(500).json({ error: e });
    });
}

export async function DeleteUser(req: Request, res: Response): Promise<void> {
  const id = req.params?.id;
  UserModel.findByIdAndDelete(id)
    .then((users) => {
      res.json(users);
    })
    .catch((e: unknown) => {
      res.status(500).json({ error: e });
    });
}