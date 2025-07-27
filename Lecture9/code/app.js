import express from 'express';
import router from './src/routes/userRoutes.js';
const app=express();
app.use(express.json())
app.use('/api/users', router);
export default app