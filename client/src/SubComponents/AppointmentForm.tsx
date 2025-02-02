import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  FormLabel,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LightModeIcon from '@mui/icons-material/LightMode';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { bookAppointment } from "../services/services";

const AppointmentForm: React.FC = () => {

  const [patientName, setPatientName] = useState<string>("");
  const [patientEmail, setPatientEmail] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimePeriod, setSelectedTimePeriod] =useState<string>("Morning");
  const [selectedTime, setSelectedTime] = useState<string>("08:00 AM");
  const [message, setMessage] = useState<string>("");

  // Dynamically calculate available times based on selected period
  const timelist =
    selectedTimePeriod === "Morning"
      ? ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
      : ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  const handleTimePeriodChange = (event: any) => {
    const newPeriod = event.target.value;
    setSelectedTimePeriod(newPeriod);
    setSelectedTime(newPeriod === "Morning" ? "08:00 AM" : "01:00 PM");
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Prepare the data to send to the API
    const appointmentData = {
      patientName,
      patientEmail,
      patientPhone,
      doctorName: "Dr. Smith",
      date: selectedDate,
      timePeriod: selectedTimePeriod,
      time: selectedTime,
    };

    try {
      // POST request
      await bookAppointment(appointmentData);
      setMessage("Appointment booked successfully!");
    } catch (error) {
      setMessage("Error booking appointment.");
    }
  };

  return (
    
    <Box
      sx={{ 
        boxSizing: 'border-box', 
        p: '20px', 
        width: { xs: "100%", sm: "90%", md: "60%" }, 
        borderRadius: "16px",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 2,
          gap: "10px",
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="black">
          BOOK
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#0cb7d6">
          APPOINTMENT
        </Typography>
      </Box>

      {/* form data  */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            mt: "20px",
            p: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexGrow: "1",
              flexBasis: { xs: "100%", sm: "40%", md: "30%" },
              minWidth: "260px",
            }}
          >
            <FormLabel htmlFor="Name">Name</FormLabel>
            <TextField
              id="Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#D1D1D1",
                  height: "44px",
                  borderRadius: "8px",
                },
              }}
              placeholder="Enter Your Name"
              InputProps={{
                startAdornment: <PersonIcon sx={{mr:2, color:'#D1D1D1'}}/>,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexGrow: "1",
              flexBasis: { xs: "100%", sm: "40%", md: "30%" },
              minWidth: "260px",
            }}
          >
            <FormLabel htmlFor="Email">Email</FormLabel>
            <TextField
              id="Email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#D1D1D1",
                  height: "44px",
                  borderRadius: "8px",
                },
              }}
              placeholder="Enter Your Email"
              InputProps={{
                startAdornment:<EmailIcon sx={{mr:2, color:'#D1D1D1'}}/>,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexGrow: "1",
              flexBasis: { xs: "100%", sm: "40%", md: "30%" },
              minWidth: "260px",
            }}
          >
            <FormLabel htmlFor="PhoneNumber">Phone Number</FormLabel>
            <TextField
              id="PhoneNumber"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#D1D1D1",
                  height: "44px",
                  borderRadius: "8px",
                },
              }}
              placeholder="Enter Your Phone Number"
              InputProps={{
                startAdornment: <PhoneIcon sx={{mr:2, color:'#D1D1D1'}}/>,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexGrow: "1",
              flexBasis: { xs: "100%", sm: "40%", md: "30%" },
              minWidth: "260px",
            }}
          >
            <FormLabel htmlFor="Date">Date</FormLabel>
            <TextField
              id="Date"
              type="date"
              InputProps={{
                startAdornment: <CalendarMonthIcon sx={{mr:2, color:'#D1D1D1'}}/>,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#D1D1D1",
                  height: "44px",
                  borderRadius: "8px",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexGrow: "1",
              flexBasis: { xs: "100%", sm: "40%", md: "30%" },
              minWidth: "260px",
            }}
          >
            <FormLabel htmlFor="TimePeriod">Time Period</FormLabel>
            <TextField
              select
              id="TimePeriod"
              value={selectedTimePeriod}
              onChange={handleTimePeriodChange}
              InputProps={{
                startAdornment: <LightModeIcon sx={{mr:2, color:'#D1D1D1'}}/>,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#D1D1D1",
                  height: "44px",
                  borderRadius: "8px",
                },
              }}
            >
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
            </TextField>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexGrow: "1",
              flexBasis: { xs: "100%", sm: "40%", md: "30%" },
              minWidth: "260px",
            }}
          >
            <FormLabel htmlFor="Time">Time</FormLabel>
            <TextField
              select
              id="Time"
              value={selectedTime}
              onChange={handleTimeChange}
              InputProps={{
                startAdornment: <AccessTimeFilledIcon sx={{mr:2, color:'#D1D1D1'}}/>,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#D1D1D1",
                  height: "44px",
                  borderRadius: "8px",
                },
              }}
            >
              {timelist.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#0cb7d6",
              // "&:hover": { backgroundColor: "green" },
              padding: "12px 24px",
            }}
          >
            Request Appointment
          </Button>
        </Box>
      </form>
      {message && (
        <Typography
          variant="body2"
          color={message.includes("successfully") ? "success" : "error"}
          sx={{ textAlign: "center", mt: 2 ,display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}
        >
          {message.includes("successfully") ? (
      <CheckCircleIcon sx={{ color: 'green' }} />
    ) : (
      <ErrorIcon sx={{ color: 'red' }} /> 
    )}
          {message}
        </Typography>
      )}
    </Box>
    
  );
};

export default AppointmentForm;
