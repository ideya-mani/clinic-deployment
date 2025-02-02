import mongoose, { Document, Schema } from 'mongoose';

interface IPost extends Document {
  content: string;
  likes: number;
  comments: string[];
  image?: string;  // Store image URL
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: [String], default: [] },
  image: { type: String, default: '' },
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
