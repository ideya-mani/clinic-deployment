import Clinic from "../components/Clinic";
import Doctors from "../components/Doctors";
import { Box } from "@mui/material";
import ImageCarousel from "../components/imageSlider";
import FAQSection from "../components/FqaSections";

const About = () => {
  return (
    <Box>
      <ImageCarousel />
      <Clinic />
      <Doctors />
      <FAQSection />
    </Box>
  );
};

export default About;
