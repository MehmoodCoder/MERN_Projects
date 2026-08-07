import UserModel from "../models/user.js";

export async function HomeUI(req, res) {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(e => res.json(e))
}

