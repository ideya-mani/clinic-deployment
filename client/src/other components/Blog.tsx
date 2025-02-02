import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, IconButton, FormControl, InputLabel } from '@mui/material';
import { ThumbUp } from '@mui/icons-material';

interface Post {
  _id: string;
  content: string;
  likes: number;
  comments: string[];
  image?: string;  // Image URL or Blob URL
}

const TimelinePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState<string>('');
  const [newPostImage, setNewPostImage] = useState<File | null>(null);
  const [newComment, setNewComment] = useState<string>('');

  // Fetch posts from the server
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/timeline/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Handle creating a new post
  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;

    const formData = new FormData();
    formData.append('content', newPostContent);
    if (newPostImage) formData.append('image', newPostImage);

    try {
      const response = await axios.post('http://localhost:5000/api/timeline/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPosts([response.data.post, ...posts]);
      setNewPostContent('');
      setNewPostImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Handle liking a post
  const handleLike = async (postId: string) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/timeline/posts/${postId}/like`);
      setPosts(posts.map(post => (post._id === postId ? { ...post, likes: response.data.likes } : post)));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // Handle adding a comment
  const handleAddComment = async (postId: string) => {
    if (!newComment.trim()) return;

    try {
      const response = await axios.post(`http://localhost:5000/api/timeline/posts/${postId}/comment`, { comment: newComment });
      setPosts(posts.map(post => (post._id === postId ? { ...post, comments: response.data.comments } : post)));
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:", error');
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="What's on your mind?"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <InputLabel>Upload Image</InputLabel>
        <input
          type="file"
          onChange={(e) => setNewPostImage(e.target.files ? e.target.files[0] : null)}
          style={{ display: 'none' }}
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button component="span" variant="contained" sx={{ marginTop: 1 }}>
            Upload Image
          </Button>
        </label>
      </FormControl>
      <Button variant="contained" onClick={handleCreatePost} sx={{ marginTop: 2 }}>
        Post
      </Button>

      {posts.map((post) => (
        <Box key={post._id} sx={{ border: '1px solid #ddd', padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">{post.content}</Typography>
          {post.image && <img src={post.image} alt="Post" width="100%" style={{ marginTop: 10 }} />}
          <Box sx={{ marginTop: 2 }}>
            <IconButton onClick={() => handleLike(post._id)}>
              <ThumbUp />
            </IconButton>
            <Typography variant="body2">{post.likes} Likes</Typography>
            <Box sx={{ marginTop: 2 }}>
              {post.comments.map((comment, idx) => (
                <Typography key={idx} variant="body2">{comment}</Typography>
              ))}
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <TextField
                label="Add a comment"
                variant="outlined"
                fullWidth
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post._id)}
              />
              <Button onClick={() => handleAddComment(post._id)} variant="outlined" sx={{ marginTop: 1 }}>
                Comment
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TimelinePost;
