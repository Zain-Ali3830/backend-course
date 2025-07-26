import express from 'express';
import router from "./src/routes/userroute.js";
import errorHandler from "./src/middleware/errorhandler.js";
const app = express();
app.use(express.json())
app.use(errorHandler);
app.use('/api/users', router);
export default app