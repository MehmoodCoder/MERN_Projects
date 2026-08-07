import express from 'express'

import { HomeUI, GetUser, UpdateUser } from "../controllers/static.js";

const router = express.Router()


router.get('/', HomeUI)
router.get('/getuser/:id', GetUser)
router.put('/update/:id', UpdateUser)

export default router