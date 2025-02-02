import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, List, ListItem, ListItemText, CircularProgress, Alert } from '@mui/material';

interface Appointment {
  _id: string;
  doctorName: string;
  date: string;
  status: string;
}

const PatientAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientPhone, setPatientPhone] = useState<string>(''); // Changed from patientEmail to patientPhone
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchAppointments = async () => {
      if (patientPhone) {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:5000/api/patient/appointments?patientPhone=${patientPhone}` // Updated URL to use patientPhone
          );
          setAppointments(response.data.appointments);
          setLoading(false);
        } catch (error) {
          setError('Error fetching appointments');
          setLoading(false);
        }
      }
    };

    fetchAppointments();
  }, [patientPhone]); // Dependency on patientPhone

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">My Appointments</Typography>
      
      {/* Phone input to fetch appointments */}
      <TextField
        fullWidth
        label="Enter your phone number to see appointments" // Updated label to reflect phone number
        variant="outlined"
        margin="normal"
        value={patientPhone}
        onChange={(e) => setPatientPhone(e.target.value)} // Changed to handle phone number
      />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ marginTop: '20px' }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      ) : (
        <List sx={{ marginTop: '20px' }}>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <ListItem key={appointment._id}>
                <ListItemText
                  primary={`${appointment.doctorName} - ${new Date(appointment.date).toLocaleString()} - Status: ${appointment.status}`}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
              No appointments found.
            </Typography>
          )}
        </List>
      )}
    </Box>
  );
};

export default PatientAppointments;
