import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, Select, FormControl, InputLabel, Box, Typography } from '@mui/material';
import axios from 'axios';
import { getAppointments, updateAppointmentStatus } from '../services/services';

const AppointmentTable: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch the appointment data
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Handle status change for a specific appointment
  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
       await updateAppointmentStatus(id,newStatus)
        setAppointments(prevAppointments =>
          prevAppointments.map(appointment =>
            appointment._id === id ? { ...appointment, status: newStatus } : appointment
          )
        );
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  if (loading) {
    return <Typography>Loading appointments...</Typography>;
  }

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', marginTop: 3 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.doctorName}</TableCell>
                <TableCell>{new Date(appointment.date).toLocaleDateString()}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>
                  <FormControl>
                    <Select 
                    sx={{height:'30px',width:'150px'}}
                      value={appointment.status}
                      onChange={(e) => handleStatusChange(appointment._id, e.target.value as string)}
                    >
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="confirmed">Confirmed</MenuItem>
                      <MenuItem value="cancelled">Cancelled</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppointmentTable;
