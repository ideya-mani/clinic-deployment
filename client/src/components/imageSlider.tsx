import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../assets/clinic_images/beautiful-stylish-white-office-successful-doctor.jpg';
import slide2 from '../assets/clinic_images/patient-getting-chemotherapy-treatment.jpg';
import slide3 from '../assets/clinic_images/view-luxurious-hotel-interior-space.jpg';
import slide4 from '../assets/clinic_images/clinic patient.jpg';
import slide5 from '../assets/clinic_images/clinic room.jpg';
import { Box } from '@mui/material';


const ImageCarousel = () => {
  const images = [slide1, slide2, slide3, slide4, slide5];
    return (
      <Box 
      sx={{ 
        m:'20px',
        borderRadius:'32px',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" ,borderRadius:'12px'}} />
          </div>
        ))}
      </Carousel>
      </Box>
    );
  };
  
  export default ImageCarousel;