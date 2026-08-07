import UserModel from "../models/user.js";

export async function CreateNewUser(req, res) {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(e => res.json(e))
}
