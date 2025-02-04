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
      patientPhone,
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


// Get all appointments for a patient (by phone or email)
router.get("/appointment", async (req: any, res: any) => {
  try {
    const { patientPhone, patientEmail } = req.query;

    if (!patientPhone && !patientEmail) {
      return res.status(400).json({ message: "Patient phone or email is required" });
    }

    const query: any = {};
    if (patientPhone) query.patientPhone = patientPhone;
    if (patientEmail) query.patientEmail = patientEmail;

    const appointments = await Appointment.find(query);
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
});

export default router;
