import express, { Request, Response } from 'express';
import Appointment from '../models/Appointment';

const router = express.Router();

// Get all appointments for the doctor
router.get('/getappointments', async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find({});
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

// Update appointment status (for doctor/admin)
router.put('/updateappointment/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    res.json({ message: 'Appointment status updated', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment status' });
  }
});

export default router;
