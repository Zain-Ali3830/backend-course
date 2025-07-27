import express from 'express'
import { Router } from 'express'
import { login } from '../controllers/userContrller.js'
import { register } from '../controllers/userContrller.js'
import { verifyToken } from '../middleware/authMiddleware.js'
const router=express.Router();
router.route('/login').post(login);
router.route('/register').post(register);
router.get('/dashboard', verifyToken, (req, res) => {
  res.send('Welcome to protected dashboard!');
});

export default router