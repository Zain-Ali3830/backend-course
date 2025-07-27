import express from 'express';
import { signup } from '../controllers/userController.js';
import { login } from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';
import verifyToken from '../middleware/JWTverification.js';

const router = express.Router();
router.route('/signup').post(validateUser,signup);
router.route('/login').post(validateUser,login);
router.get('/dashboard', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Protected route accessed successfully' });
})
export default router