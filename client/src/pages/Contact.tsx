import { Box } from '@mui/material';
import ContactSection from '../SubComponents/ContactSection';
import ContactForm from '../SubComponents/Contentform';
import PatientAppointments from '../components/PatientAppointments';

const Contact = () => {
 
  return (
    <Box sx={{ padding: '20px' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          p: "20px",
          m: "20px",
          flexWrap: "wrap",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "32px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          gap: "20px",
        }}
      >
        <PatientAppointments/>
        <ContactForm/>
      </Box>
      <ContactSection/>
    </Box>
  );
};

export default Contact;
