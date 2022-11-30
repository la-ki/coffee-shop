import { Box, Button, Card, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import PropType from 'prop-types';
import { useState } from 'react';
import { shippingDetailsSchema } from '../../../schemas/shippingDetailsSchema';
import { useUserData } from '../../../store/user-context';
import ErrorMessageComponent from '../../mui/ErrorMessageComponent';

const ShippingDetailsForm = ({
  backBtn = false,
  isCheckout = false,
  submitHandler,
  enableBtn = true,
}) => {
  const { t } = useTranslation('addressForm');
  const [error] = useState({ hasError: false, errorMessage: '' });
  const { userStorage } = useUserData();
  const router = useRouter();

  const formikSubmitHandler = async (values) => {
    submitHandler(values);
  };

  const formik = useFormik({
    initialValues: {
      fullName: userStorage ? userStorage.fullName : '',
      address: userStorage ? userStorage.address : '',
      address2: userStorage ? userStorage.address2 : '',
      city: userStorage ? userStorage.city : '',
      country: userStorage ? userStorage.country : '',
      postcode: userStorage ? userStorage.postcode : '',
    },
    validationSchema: shippingDetailsSchema,
    onSubmit: formikSubmitHandler,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <Card sx={{ p: 3, backgroundColor: '#f2f2f2' }}>
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
            name="fullName"
            label={t('addressForm:name')}
            margin="normal"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            fullWidth
          />
          <TextField
            name="address"
            label={t('addressForm:address')}
            margin="normal"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            fullWidth
          />
          <TextField
            name="address2"
            label={t('addressForm:address2')}
            margin="normal"
            value={formik.values.address2}
            onChange={formik.handleChange}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
            fullWidth
          />
          <TextField
            name="city"
            label={t('addressForm:city')}
            margin="normal"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            fullWidth
          />
          <Box sx={{ display: 'flex' }}>
            <TextField
              name="country"
              label={t('addressForm:country')}
              margin="normal"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              fullWidth
              sx={{ mr: 1.5 }}
            />
            <TextField
              name="postcode"
              label={t('addressForm:postcode')}
              margin="normal"
              value={formik.values.postcode}
              onChange={formik.handleChange}
              error={formik.touched.postcode && Boolean(formik.errors.postcode)}
              helperText={formik.touched.postcode && formik.errors.postcode}
              fullWidth
            />
          </Box>

          {backBtn && (
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                height: 50,
                width: 150,
                textTransform: 'none',
                backgroundColor: 'primary.main',
                color: 'white',
                mr: 2,
              }}
              onClick={() => {
                router.push('/cart');
              }}
            >
              {t('addressForm:back')}
            </Button>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#CBA213',
              height: 50,
              width: isCheckout ? 200 : 150,
              textTransform: 'none',
              color: 'white',
            }}
            disabled={!enableBtn}
            onClick={() => {
              submitHandler;
            }}
          >
            {isCheckout ? t('addressForm:shipping') : t('addressForm:submit')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

ShippingDetailsForm.propTypes = {
  backBtn: PropType.bool,
  isCheckout: PropType.bool,
  submitHandler: PropType.func,
};

export default ShippingDetailsForm;
