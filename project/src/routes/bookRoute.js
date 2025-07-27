import express from 'express';
import { addBook } from '../controllers/bookController.js';
import { getBooks } from '../controllers/bookController.js';
import { getBookByTitle } from '../controllers/bookController.js';
import { deleteBook } from '../controllers/bookController.js';
import { updateBook } from '../controllers/bookController.js';

const bookRouter = express.Router();
bookRouter.route('/addbook').post(addBook);
bookRouter.route('/getbooks').get(getBooks);
bookRouter.route('/getbookbytitle/:title').get(getBookByTitle);
bookRouter.route('/deletebook/:id').delete(deleteBook);
bookRouter.route('/updatebook/:id').put(updateBook);
export default bookRouter