import express from 'express'

import { HomeUI, CreateNewUser, GetUser, UpdateUser, DeleteUser } from "../controllers/static.js";

const router = express.Router()

function requireAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers['authorization']
  if (!process.env.API_KEY || authHeader !== `Bearer ${process.env.API_KEY}`) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  next()
}

router.use(requireAuth)

router.get('/', HomeUI)
router.post('/create', CreateNewUser);
router.get('/getuser/:id', GetUser)
router.put('/update/:id', UpdateUser)
router.delete('/delete/:id', DeleteUser)

export default router