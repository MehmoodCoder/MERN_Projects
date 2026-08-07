import UserModel from "../models/user.js";

export async function HomeUI(req, res) {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((e) => res.json(e));
}

export async function GetUser(req, res) {
  const id = req.params?.id;
  UserModel.findById( id )
    .then((users) => res.json(users))
    .catch((e) => res.json(`Error`, e));
}
