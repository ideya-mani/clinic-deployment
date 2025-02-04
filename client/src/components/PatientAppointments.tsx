import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormLabel,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
interface Appointment {
  _id: string;
  doctorName: string;
  date: string;
  status: string;
}

const PatientAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientEmail, setPatientEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchAppointments = async () => {
    if (!patientPhone && !patientEmail) {
      setError("Please enter a phone number or email.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://localhost:5000/patient/appointment`,
        { params: { patientPhone, patientEmail } } // Sending both params
      );
      setAppointments(response.data.appointments);
    } catch (error) {
      setError("Error fetching appointments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      boxSizing: "border-box",
      width: { xs: "100%", sm: "90%", md: "35%" },
      p: "20px",
      borderRadius: "16px",
      backdropFilter: "blur(8px)",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    }}>
      <Typography variant="h4" margin='10px' textAlign='center'>My Appointments</Typography>
{/* Email */}
<Box sx={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "260px", flexGrow: 1 }}>
            <FormLabel htmlFor="Email">Email</FormLabel>
            <TextField
              id="Email"
              type="email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              placeholder="Enter Your Email"
              InputProps={{ startAdornment: <EmailIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", height: "44px", borderRadius: "8px" } }}
            />
          </Box>
          <Typography sx={{textAlign:'center', color:'blue', m:'10px'}}>(or)</Typography>
      
{/* Phone */}
<Box sx={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "260px", flexGrow: 1 }}>
            <FormLabel htmlFor="Phone">Phone</FormLabel>
            <TextField
              id="Phone"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              placeholder="Enter Your Phone Number"
              InputProps={{ startAdornment: <PhoneIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", height: "44px", borderRadius: "8px" } }}
            />
          </Box>

      {/* Button to fetch appointments */}
      <Button variant="contained" onClick={fetchAppointments} sx={{ backgroundColor: "#0cb7d6", padding: "12px 24px", m:'20px' }}>
        Check Appointments
      </Button>

      {/* Loading and Error Messages */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box sx={{ mt: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* Appointments Table */}
      {appointments.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Doctor Name</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Status</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment._id}>
                  <TableCell>{appointment.doctorName}</TableCell>
                  <TableCell>{new Date(appointment.date).toLocaleString()}</TableCell>
                  <TableCell>{appointment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default PatientAppointments;
