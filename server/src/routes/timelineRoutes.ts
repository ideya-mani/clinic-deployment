// import express, { Request, Response } from 'express';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import Post from '../models/Post';

// const router = express.Router();

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, '../uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Set up Multer for image uploads (you can adjust the storage configuration)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
// });

// // GET all posts
// router.get('/posts', async (req: Request, res: Response) => {
//   try {
//     const posts = await Post.find();
//     res.json({ posts });
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching posts', error: err });
//   }
// });

// // POST a new post
// router.post('/posts', upload.single('image'), async (req: any, res: any) => {
//   const { content } = req.body;
//   if (!content) {
//     return res.status(400).json({ message: 'Content is required' });
//   }

//   const image = req.file ? `/uploads/${req.file.filename}` : '';

//   const newPost = new Post({
//     content,
//     image,
//   });

//   try {
//     const savedPost = await newPost.save();
//     res.status(201).json({ post: savedPost });
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving post', error: err });
//   }
// });

// // PUT like a post
// router.put('/posts/:postId/like', async (req: any, res: any) => {
//   const { postId } = req.params;

//   try {
//     const post = await Post.findById(postId);

//     if (!post) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     post.likes += 1;
//     const updatedPost = await post.save();
//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(500).json({ message: 'Error liking post', error: err });
//   }
// });

// // POST comment on a post
// router.post('/posts/:postId/comment', async (req: any, res: any) => {
//   const { postId } = req.params;
//   const { comment } = req.body;

//   if (!comment) {
//     return res.status(400).json({ message: 'Comment is required' });
//   }

//   try {
//     const post = await Post.findById(postId);

//     if (!post) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     post.comments.push(comment);
//     const updatedPost = await post.save();
//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(500).json({ message: 'Error adding comment', error: err });
//   }
// });

// export default router;
