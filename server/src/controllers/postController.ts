import { Request, Response } from 'express';
import Post from '../models/Post';
import { uploadImageToBlob } from '../services/azureBlobService'; // Azure service

// Controller for creating a new post
export const createPost = async (req: any, res: any) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    let imageUrl = '';
    if (req.file) {
      // Upload image to Azure and get the URL
      imageUrl = await uploadImageToBlob(req.file);
    }

    const newPost = new Post({
      content,
      image: imageUrl,
    });

    const savedPost = await newPost.save();
    res.status(201).json({ post: savedPost });
  } catch (err) {
    res.status(500).json({ message: 'Error saving post', error: err });
  }
};
