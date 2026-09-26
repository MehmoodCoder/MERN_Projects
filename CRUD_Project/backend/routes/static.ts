import express, { Request, Response, NextFunction } from 'express'

import { HomeUI, CreateNewUser, GetUser, UpdateUser, DeleteUser } from "../controllers/static.js";

const router = express.Router()

function requireApiKey(req: Request, res: Response, next: NextFunction): void {
  const providedKey = req.header('x-api-key');
  if (!providedKey || providedKey !== process.env.API_KEY) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  next();
}

router.use(requireApiKey)

router.get('/', HomeUI)
router.post('/create', CreateNewUser);
router.get('/getuser/:id', GetUser)
router.put('/update/:id', UpdateUser)
router.delete('/delete/:id', DeleteUser)

export default router