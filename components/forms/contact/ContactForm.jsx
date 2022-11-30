import { Box, Button, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import PropType from 'prop-types';
import React, { useState } from 'react';
import { contactSchema } from '../../../schemas/contactSchema';
import { useCheckoutData } from '../../../store/checkout-context';
import ErrorMessageComponent from '../../mui/ErrorMessageComponent';

const ContactForm = ({ submitHandler }) => {
  const [error] = useState({ hasError: false, errorMessage: '' });
  const { checkoutStorage } = useCheckoutData();

  const handleSubmit = async (values) => {
    submitHandler(values.email);
  };

  const formik = useFormik({
    initialValues: {
      email: checkoutStorage ? checkoutStorage.userInfo.email : '',
    },
    validationSchema: contactSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <Paper
      sx={{ p: 3, width: '90%', ml: 12, mt: 2, backgroundColor: '#f2f2f2' }}
      elevation={3}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {error.hasError && <ErrorMessageComponent error={error.errorMessage} />}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ position: 'relative', mt: 1, p: 1 }}
        >
          <TextField
            name="email"
            label="Email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#CBA213',
              height: 50,
              width: 150,
              textTransform: 'none',
              color: 'white',
            }}
          >
            Submit Details
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

ContactForm.propTypes = {
  submitHandler: PropType.func,
};

export default ContactForm;
