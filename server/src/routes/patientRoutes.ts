import express, { Request, Response } from 'express';
import Appointment from '../models/Appointment';

const router = express.Router();

// Book an appointment
router.post('/bookappointment', async (req: Request, res: Response) => {
  const { patientName, patientEmail, patientPhone, doctorName, date, timePeriod, time } = req.body;
  try {
    const newAppointment = new Appointment({
      patientName,
      patientEmail,
      patientPhone,  // Include the patient's phone number
      doctorName,
      date,
      timePeriod,
      time,
    });
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment' });
  }
});

// Get all appointments for patient
router.get('/appointment', async (req: Request, res: Response) => {
  const { patientEmail } = req.query;
  try {
    const appointments = await Appointment.find({ patientEmail });
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

export default router;
