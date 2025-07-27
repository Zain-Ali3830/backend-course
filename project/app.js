import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import router from './src/routes/userRoute.js';
import bookRouter from './src/routes/bookRoute.js';

app.use('/api/users', router);
app.use('/api/books', bookRouter);
export default app;