import express from 'express'

import { HomeUI, CreateNewUser, GetUser, UpdateUser, DeleteUser } from "../controllers/static.js";

const router = express.Router()


router.get('/', HomeUI)
router.post('/', CreateNewUser);
router.get('/getuser/:id', GetUser)
router.put('/update/:id', UpdateUser)
router.delete('/delete/:id', DeleteUser)

export default router