// src/pages/Contact.tsx
import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContactSection from '../SubComponents/ContactSection';

const Contact = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`${t('message_sent')}: ${message}`);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* <Typography variant="h3">{t('contact')}</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <TextField
          label={t('your_message')}
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          {t('send_message')}
        </Button>
      </form> */}
      <ContactSection/>
    </Box>
  );
};

export default Contact;
