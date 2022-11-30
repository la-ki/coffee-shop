import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import PropType from 'prop-types';
import React, { useState } from 'react';
import { BASE_PAGE } from '../../../constants/pages';
import { postQuestion } from '../../../requests/question/postQuestionRequest';
import { contactPageSchema } from '../../../schemas/contactSchema';
import Notification from '../../notification/Notification';

const ContactPageForm = () => {
  const { t } = useTranslation('contact');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (values) => {
    try {
      postQuestion(values);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseNotification = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: contactPageSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <Container component="main" maxWidth="md" sx={{ mb: '60px' }}>
      <Notification
        open={open}
        notification={t('contact:notification')}
        handleCloseNotification={handleCloseNotification}
      />
      <Box
        sx={{
          marginTop: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography fontSize={48}>{t('contact:title')}</Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ position: 'relative', mt: 1, p: 1 }}
        >
          <TextField
            name="firstName"
            label={t('contact:firstName')}
            margin="normal"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            autoFocus
            fullWidth
          />
          <TextField
            name="lastName"
            label={t('contact:lastName')}
            margin="normal"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            autoFocus
            fullWidth
          />
          <TextField
            name="email"
            label={t('contact:email')}
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoFocus
            fullWidth
          />
          <TextField
            name="message"
            label={t('contact:message')}
            multiline
            margin="normal"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            rows={4}
            autoFocus
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            {t('contact:sendBtn')}
          </Button>
          <Grid container justifyContent="center">
            <Link href={BASE_PAGE}>
              <Typography>{t('contact:back')}</Typography>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

ContactPageForm.propTypes = {
  submitHandler: PropType.func,
};

export default ContactPageForm;
