import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import patientRoutes from './routes/patientRoutes';
import adminRoutes from './routes/adminRoutes';
import authRoutes from './routes/authRoutes';
// import timelineRoutes from './routes/timelineRoutes';
import postRoutes from './routes/postRoutes';
import contactRoutes from './routes/contactRoutes';

dotenv.config();

const app = express();

// Use the dynamic PORT from environment variables (Render/Vercel uses PORT)
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medical_appointments')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/patient', patientRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
// app.use('/api/timeline', timelineRoutes);
app.use('/api/post', postRoutes);
app.use('/patient', contactRoutes);

// Listen on dynamic port (for Render/Local Development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

// For Vercel/Serverless, export the app handler (important for Vercel)
export default app;
