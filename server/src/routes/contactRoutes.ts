import express, { Request, Response } from 'express';
import Contact from '../models/Contact';

const router = express.Router();

// Handle contact form submission
router.post('/contact', async (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Create a new contact message
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Save the contact message to the database
    await newContact.save();

    // Send a success response
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

export default router;
