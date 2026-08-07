import express from 'express'

import { HomeUI } from "../controllers/static.js";

const router = express.Router()


router.get('/', HomeUI)

export default router