import express from 'express';
import { getUsers } from '../controllers/userController.js';
import { createUser } from '../controllers/userController.js';
import validateUser from '../middlewares/validateUser.js';

const router=express.Router();
router.get('/getusers',getUsers);
router.post('/createuser',createUser,validateUser);
export default router;