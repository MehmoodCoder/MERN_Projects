import express from 'express'

import { HomeUI, GetUser } from "../controllers/static.js";

const router = express.Router()


router.get('/', HomeUI)
router.get('/getuser/:id', GetUser)

export default router