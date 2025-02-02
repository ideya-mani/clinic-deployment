import { useState, useEffect } from 'react';
import { Select, MenuItem, Box, Typography, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TopHeader = () => {
  const { t, i18n } = useTranslation();
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // Hide TopHeader when scrolling down
    } else {
      setShowHeader(true); // Show TopHeader when scrolling up
    }
    lastScrollY = window.scrollY;
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        top: showHeader ? 0 : '-100px', // Hide when scrolling down
        transition: 'top 0.3s ease', // Smooth transition for hiding/showing
        backgroundColor: '#00246B',
        color: 'white',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-around',alignContent:'center', gap: 2 }}>
        <Typography variant="body1" color="inherit">
          {t('phone')}: +91 9944149497 / +91 9487874602
        </Typography>
        <Typography variant="body1" color="inherit">
          {t('email')}: sumpamadhiraa@gmail.com
        </Typography>
        <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center'}}> 
        <Typography>{t('select_language')}:</Typography>
        <Select
          defaultValue="en"
          variant="outlined"
          onChange={handleLanguageChange}
          sx={{ color: 'white',m:'5px' }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="ta">தமிழ்</MenuItem>
          <MenuItem value="hi">हिन्दी</MenuItem>
        </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default TopHeader;
