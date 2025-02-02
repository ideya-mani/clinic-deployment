import mongoose from 'mongoose';

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true }); // To automatically include createdAt and updatedAt

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
