import express from 'express';
import multer from 'multer';
import { createPost } from '../controllers/postController';

const router = express.Router();

// Set up multer storage for temporary files
const upload = multer({ dest: 'uploads/' });

// Post routes
router.post('/image', upload.single('image'), createPost); // Single image upload

export default router;
