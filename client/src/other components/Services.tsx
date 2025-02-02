import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BookAppointment from './BookAppointment';
import PatientAppointments from '../components/PatientAppointments';

const Services = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3">{t('services')}</Typography>
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        {t('description')}
      </Typography>
      <BookAppointment/>
      <PatientAppointments/>
    </Box>
  );
};

export default Services;
