import UserModel from "../models/user.js";

export async function HomeUI(req, res) {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((e) => res.json(e));
}

export async function GetUser(req, res) {
  const id = req.params?.id;
  UserModel.findById(id)
    .then((users) => res.json(users))
    .catch((e) => res.json(`Error :`, e));
}

export async function UpdateUser(req, res) {
  const id = req.params?.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  })
    .then((users) => res.json(users))
    .catch((e) => res.json(`Error :`, e));
}

export async function DeleteUser(req, res) {
  const id = req.params?.id;
  UserModel.findByIdAndDelete(id)
    .then((users) => {
      res.json(users);
    })
    .catch((e) => res.json("Error : ", e));
}
