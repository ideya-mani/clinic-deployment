import { Box, styled, Button, CircularProgress } from "@mui/material";
import AppointmentForm from "../SubComponents/AppointmentForm";
import Timetable from "../SubComponents/Timetable";
import ContactSection from "../SubComponents/ContactSection";
import nameBanner from "../assets/home/SECONDARY 1-cropped.svg";
import banner from "../assets/home/main_banner.webp";
import AppointmentBg from "../assets/home/appointmentBg.webp";

import { lazy, Suspense, useRef } from "react";
const Clinic = lazy(() => import("../components/ClinicMiniCard"));
const Doctors = lazy(() => import("../components/Doctors"));
const ImageCarousel = lazy(() => import("../components/imageSlider"));

// Styled Golden Button
const GoldenButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #FFD700, #FFB800)",
  color: "#fff",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "30px",
  textTransform: "uppercase",
  fontSize: "16px",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.4)",
  height: "40px",
  "&:hover": {
    background: "linear-gradient(45deg, #FFC300, #FFA500)",
    boxShadow: "0px 6px 15px rgba(255, 215, 0, 0.8)",
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(0.95)",
    transition: "transform 0.1s ease-in-out",
  },
  // Responsive Styles
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    padding: "10px 20px",
    height: "35px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "8px 16px",
    height: "30px",
  },
}));

// Loading spinner
const LoadingSpinner = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <CircularProgress color="primary" size={60} />
  </Box>
);

const Home = () => {

  const appointmentRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the AppointmentForm
  const handleBookAppointmentClick = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
      }}
    >
      {/* Background Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "30vh", sm: "40vh", md: "60vh" },
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "left center", sm: "center" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            pr: { xs: "0%", sm: "25%", md: "30%" },
          }}
        >
          {/* Name Banner */}
          <Box
            component="img"
            src={nameBanner}
            sx={{
              mb: "20px",
              width: { xs: "70%", sm: "50%", md: "100%" },
              maxHeight: { xs: "80px", sm: "150px", md: "200px" },
              objectFit: "contain",
            }}
          />

          {/* Button */}
          <GoldenButton sx={{ mt: "5px" }} onClick={handleBookAppointmentClick}>Book Appointment</GoldenButton>
        </Box>
      </Box>

      {/* Suspense with loading state */}
      <Suspense fallback={<LoadingSpinner />}>
        <ImageCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Clinic />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Doctors />
      </Suspense>

      <Box
      ref={appointmentRef}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          p: "20px",
          m: "20px",
          flexWrap: "wrap",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "32px",
          backgroundImage: `url(${AppointmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          gap: "20px",
        }}
      >
        <AppointmentForm />
        <Timetable />
      </Box>
      <ContactSection />
    </Box>
  );
};

export default Home;
