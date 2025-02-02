import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  patientPhone: { type: String, required: true }, // Added phone number field
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  timePeriod: { type: String, enum: ['Morning', 'Afternoon'], required: true }, 
  time: { type: String, required: true }, 
  status: { type: String, default: 'pending' }, // pending, confirmed, completed
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
