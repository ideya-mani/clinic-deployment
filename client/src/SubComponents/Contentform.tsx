import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormLabel,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { sendContactMessage } from "../services/services";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const contactData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    try {
      await sendContactMessage(contactData);

      setResponseMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      
    } catch (error) {
      setResponseMessage("Error sending message.");
    }
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: { xs: "100%", sm: "90%", md: "60%" },
        p: "20px",
        borderRadius: "16px",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Title */}
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2, gap: "10px" }}>
        <Typography variant="h6" fontWeight="bold" color="black">
          GET IN
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#0cb7d6">
          TOUCH
        </Typography>
      </Box>

      {/* Form */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", mt: "20px", p: "10px" }}>
          {/* Name */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "260px", flexGrow: 1 }}>
            <FormLabel htmlFor="Name">Name</FormLabel>
            <TextField
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              InputProps={{ startAdornment: <PersonIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", height: "44px", borderRadius: "8px" } }}
            />
          </Box>

          {/* Email */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "260px", flexGrow: 1 }}>
            <FormLabel htmlFor="Email">Email</FormLabel>
            <TextField
              id="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              InputProps={{ startAdornment: <EmailIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", height: "44px", borderRadius: "8px" } }}
            />
          </Box>

          {/* Phone */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "260px", flexGrow: 1 }}>
            <FormLabel htmlFor="Phone">Phone</FormLabel>
            <TextField
              id="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Phone Number"
              InputProps={{ startAdornment: <PhoneIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", height: "44px", borderRadius: "8px" } }}
            />
          </Box>

          {/* Subject */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "260px", flexGrow: 1 }}>
            <FormLabel htmlFor="Subject">Subject</FormLabel>
            <TextField
              id="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter Subject"
              InputProps={{ startAdornment: <SubjectIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", height: "44px", borderRadius: "8px" } }}
            />
          </Box>

          {/* Message */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
            <FormLabel htmlFor="Message">Your Message</FormLabel>
            <TextField
              id="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message"
              InputProps={{ startAdornment: <MessageIcon sx={{ mr: 2, color: "#D1D1D1" }} /> }}
              sx={{ "& .MuiOutlinedInput-root": { borderColor: "#D1D1D1", borderRadius: "8px" } }}
            />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <Button type="submit" variant="contained" sx={{ backgroundColor: "#0cb7d6", padding: "12px 24px" }}>
            Send Message
          </Button>
        </Box>
      </form>

      {/* Response Message */}
      {responseMessage && (
        <Typography
          variant="body2"
          color={responseMessage.includes("successfully") ? "success" : "error"}
          sx={{ textAlign: "center", mt: 2, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}
        >
          {responseMessage.includes("successfully") ? <CheckCircleIcon sx={{ color: "green" }} /> : <ErrorIcon sx={{ color: "red" }} />}
          {responseMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
