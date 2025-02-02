
import { Typography, Box, Divider } from '@mui/material';
// import { useTranslation } from 'react-i18next';
import clinicImage from "../assets/ab-clinic.webp";
import clinicBg from "../assets/top-view-ceramic-bowl-with-capsules-table.jpg"

const Clinic = () => {
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
    backgroundImage: `url(${clinicBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    gap:'20px'
  }}
>

      {/* Clinic Image */}
  <Box
    component="img"
    loading="lazy"
    src={clinicImage}
    alt="doctor"
    sx={{ 
      width: { xs: "80%", sm: "40%", md: "30%" }, // Responsive width
      height: "auto", 
      objectFit: "cover", 
      borderRadius:'24px'
    }}
  />

  {/* Clinic Information */}
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
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Supamandhiraa Homoeo Care Clinic</Typography>
        <Typography variant="subtitle1" sx={{  }}>
        Dr. Vaishnavi (BHMS) @ Cuddalore
        </Typography>
        <Divider sx={{  }}/>
        <Typography variant="body1" sx={{ mt: 1, color: 'black', lineHeight: 1.6 }}>
  Your journey in the clinic is a cooperative exercise between you and us.
</Typography>

<Typography variant="body1" sx={{ mt: 2, color: 'black', lineHeight: 1.6 }}>
  The first step is the case record form, a type of questionnaire that you will have to think about and answer before you come here. 
  It includes a range of questions about your past history, family history, your likes and dislikes (even in food and drink). 
  Also, there will be questions about the way you sleep, dream, and sweat.
</Typography>

<Typography variant="body1" sx={{ mt: 2, color: 'black', lineHeight: 1.6 }}>
  The second step is your consultation with the associate doctor. Our very capable associate doctors will take your case in detail, 
  analyzing your individuality, symptoms, and state of mind.
</Typography>

<Typography variant="body1" sx={{ mt: 2, color: 'black', lineHeight: 1.6 }}>
  Followed by this, you will have your case consultation with 
  <Typography component="span" sx={{ fontWeight: "bold" }}> Dr. Vaishnavi</Typography>. 
  We strive to gather the maximum possible information and study this to determine the best possible remedy for you.
</Typography>

<Typography variant="body1" sx={{ mt: 2, color: 'black', lineHeight: 1.6 }}>
  To assist in this process, we use sophisticated homeopathic software to analyze your case. 
  Once we identify your remedy, we provide it to you in a potentized form.
</Typography>

<Typography variant="body1" sx={{ mt: 2, color: 'black', lineHeight: 1.6 }}>
  After receiving the remedy, you will stay in touch with us throughout your treatment. 
  We need to monitor its effects and decide on the next steps. Your cooperation is vital in this process.
</Typography>

      </Box>
</Box>
  );
};

export default Clinic;
