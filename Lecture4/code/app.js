import express from 'express';
import errorHandler from './src/middlewares/errorhandler.js';
const app = express();
app.use(express.json());
app.use(errorHandler);  // Global Error Handler
import router from './src/routes/users.js';
app.use('/api/users', router);
export default app;