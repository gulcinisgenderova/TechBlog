import express from 'express';
import { storage } from '../middleware/upload.js';
import multer from 'multer';
import { createBlog, deleteBlog, getAll, getBlog, updateBlog } from '../controller/blogController.js';
const upload = multer({storage:storage})
export const blogRouter = express.Router();

blogRouter.get('/', getAll);

blogRouter.get('/:id', getBlog);

blogRouter.post('/', upload.single('img') ,createBlog);

blogRouter.put('/:id', upload.single('img') , updateBlog);

blogRouter.delete('/:id', deleteBlog);
