import {
  Box,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const ContactSection = () => {

  return (
    <Box sx={{ padding: "20px", display: "flex", gap: "20px", flexWrap:'wrap', justifyContent:'center' }}>
      
      {/* Contact Info */}
      <Box
        sx={{
          p: "20px",
          width: { xs: "100%", sm: "90%", md: "40%" }, 
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Contact Info
        </Typography>
        <Divider/>
        <Typography color="text.secondary">
          Dr. Vaishnavi. B.H.M.S Homoeopathic Consultant
        </Typography>
        <Typography>
          <strong>Address:</strong> Pennaiyar Road, 10, Pallineliyanur Salai, Balasubramaniyan nagar, Chavadi, Kondur,Cuddalore, Tamil Nadu 607006
        </Typography>
        <Typography>
          <strong>Phone:</strong> +91 94878 74602, +91 99441 49497
        </Typography>
        <Typography>
          <strong>Email:</strong>{" "}
          <Link href="mailto:hello@medizo.com" underline="hover">
            hello@medizo.com
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: '20px', alignItems:'center' }}>
        <Typography>
          <strong>Social Media:</strong>{" "}
        </Typography>
          {/* Facebook Link (Optional) */}
          <Link href="https://facebook.com" target="_blank">
            <Facebook fontSize="large" sx={{color:'#316FF6', background:'white', borderRadius:'10px',p:'2px',boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", }}/>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram
              fontSize="large"
              sx={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
               color:'white',
               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: '10px',
                padding: '2px',
              }}
            />
          </Link>
          <Link href="https://whatsapp.com" target="_blank">
            <WhatsApp fontSize="large" sx={{color:'white', background:'#25D366', boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",borderRadius:'10px',p:'2px'}} />
          </Link>
        </Box>
      </Box>

      {/* Map Section */}
      <Box
        sx={{
          p: "10px",
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: { xs: "100%", sm: "90%", md: "55%" },
          overflow: "hidden",
        }}
      >
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          style={{ border: 2 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15623.819777768545!2d79.72255167314701!3d11.76822341386038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54998bd1683305%3A0x85ecef7f2da15b07!2sSupamandhiraa%20Homoeo%20Care%20Clinic%2C%20Dr.%20Vaishnavi.%20BHMS!5e0!3m2!1sen!2sin!4v1738394774828!5m2!1sen!2sin" loading="lazy"
        />
        </Box>

      {/* Footer Section */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Supamandhiraa Homoeo Care. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactSection;
