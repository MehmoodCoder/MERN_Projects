import express from 'express'

import { CreateNewUser } from "../controllers/user.js";

const router = express.Router()

router.post('/', CreateNewUser);

export default router