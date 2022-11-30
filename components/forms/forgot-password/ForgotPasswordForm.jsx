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
import React from 'react';
import { LOGIN_PAGE } from '../../../constants/pages';
import { forgotPasswordSchema } from '../../../schemas/forgotPasswordSchema';

const ForgotPasswordForm = () => {
  const { t } = useTranslation('forms', 'forgotPass', 'common');

  const handleSubmit = (values) => {
    console.log('Values', values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {t('forgotPass:Title')}
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ position: 'relative', mt: 1, p: 1 }}
        >
          <TextField
            name="email"
            label={t('forms:Email')}
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoFocus
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            {t('forgotPass:SendBtn')}
          </Button>
          <Grid container justifyContent="center">
            <Link href={LOGIN_PAGE}>
              <Typography sx={{ cursor: 'pointer' }}>
                {t('common:Back')}
              </Typography>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordForm;
