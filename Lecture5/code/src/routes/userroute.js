import express from 'express';
const router = express.Router();
import { registerUser } from '../controllers/usercontroller.js';
import validateUser from '../middleware/validateuser.js';

router.post('/register', registerUser,validateUser);
export default router;