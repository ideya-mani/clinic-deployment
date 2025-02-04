import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../assets/clinic_images/screen_1.webp';
import slide2 from '../assets/clinic_images/screen_2.webp';
import slide3 from '../assets/clinic_images/screen_3.webp';
import slide4 from '../assets/clinic_images/screen_4.webp';
import slide5 from '../assets/clinic_images/screen_5.webp';
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