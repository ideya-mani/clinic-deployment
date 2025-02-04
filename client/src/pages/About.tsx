import ClinicMiniCard from "../components/ClinicMiniCard";
import Doctors from "../components/Doctors";
import { Box } from "@mui/material";
import ImageCarousel from "../components/imageSlider";
import FAQSection from "../components/FqaSections";

const About = () => {
  return (
    <Box>
      {/* <ImageCarousel /> */}
      <ClinicMiniCard />
      {/* <Doctors /> */}
      <FAQSection />
    </Box>
  );
};

export default About;
