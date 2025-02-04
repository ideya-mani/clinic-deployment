import { Typography, Box, Divider } from '@mui/material';
// import { useTranslation } from 'react-i18next';
import doctorImage from "../assets/doctor/doctorProfile.webp"
import doctorBg from "../assets/doctor/doctorBg.webp"


const Doctors = () => {
  // const { t } = useTranslation(); // Use the translation hook

  return (
    <Box 
  sx={{ 
    display: 'flex', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    p: '20px',
    m:'20px',
    flexWrap: 'wrap',
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius:'32px',
    backgroundImage: `url(${doctorBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    gap:'20px'
  }}
>
  {/* Doctor Information */}
  <Box 
        sx={{ 
          boxSizing: 'border-box', 
          p: '20px', 
          width: { xs: "100%", sm: "90%", md: "60%" }, 
          borderRadius: "16px",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Dr. Vaishnavi</Typography>
        <Typography variant="subtitle1" sx={{  }}>
          BHMS (Bachelor of Homeopathic Medicine and Surgery)
        </Typography>
        <Divider sx={{  }}/>
        <Typography variant="body1" sx={{ mt: 1, color:'black' }}>
          Dr. Vaishnavi has been in practice for ten years. She has garnered a reputation 
          for helping patients who have given up hope after visiting some of the most 
          advanced medical institutions in the world.
        </Typography>
      </Box>
      {/* Doctor Image */}
      <Box
        component="img"
        src={doctorImage}
        loading="lazy"
        alt="doctor"
        sx={{ 
          width: { xs: "80%", sm: "40%", md: "30%" },
          height: "300px", 
          objectPosition: "top",
          objectFit: "cover", 
          borderRadius:'24px'
        }}
      />
</Box>

  );
};

export default Doctors;
