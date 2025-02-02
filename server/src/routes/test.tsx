mport express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const router = express.Router();

interface LoginRequestBody {
  email: string;
  password: string;
}

// Login API to authenticate admin
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as LoginRequestBody; // Type casting the body

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string, // JWT secret must be stored in an env variable
      { expiresIn: '1h' } // Token will expire in 1 hour
    );

    // Send the token as a response
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;  