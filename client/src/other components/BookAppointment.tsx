// src/components/BookAppointment.tsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BookAppointment = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`${t('appointment_booked')} ${name} ${t('on')} ${date} ${t('at')} ${time}`);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">{t('book_appointment')}</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <TextField
          label={t('your_name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label={t('date')}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label={t('time')}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          {t('book_appointment')}
        </Button>
      </form>
    </Box>
  );
};

export default BookAppointment;
