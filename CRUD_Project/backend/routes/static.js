import express from 'express'

import { HomeUI, GetUser, UpdateUser, DeleteUser } from "../controllers/static.js";

const router = express.Router()


router.get('/', HomeUI)
router.get('/getuser/:id', GetUser)
router.put('/update/:id', UpdateUser)
router.delete('/delete/:id', DeleteUser)

export default router