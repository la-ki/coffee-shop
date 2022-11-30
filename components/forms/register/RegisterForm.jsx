import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { FORGOT_PASSWORD_PAGE, LOGIN_PAGE } from '../../../constants/pages';
import { createUser } from '../../../requests/accounts/accountRequests';
import { registerSchema } from '../../../schemas/registerSchema';
import ErrorMessageComponent from '../../mui/ErrorMessageComponent';

const RegisterForm = () => {
  const { t } = useTranslation('forms', 'register');
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const [error, setError] = useState({ hasError: false, errorMessage: '' });

  const submitHandler = async (values) => {
    try {
      await createUser(
        values.fullName,
        values.username,
        values.email,
        values.password,
        values.address,
        values.address2,
        values.city,
        values.country,
        values.postcode
      );
      router.push(LOGIN_PAGE);
    } catch (error) {
      setError({ hasError: true, errorMessage: error.message });
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      address2: '',
      city: '',
      country: '',
      postcode: '',
    },
    validationSchema: registerSchema,
    onSubmit: submitHandler,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {t('register:Title')}
        </Typography>
        {error.hasError && <ErrorMessageComponent error={error.errorMessage} />}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ position: 'relative', mt: 1, p: 1 }}
        >
          <TextField
            name="fullName"
            label={t('forms:FullName')}
            margin="normal"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            autoFocus
            fullWidth
          />
          <TextField
            name="username"
            label={t('forms:Username')}
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            fullWidth
          />
          <TextField
            name="email"
            label={t('forms:Email')}
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />
          <TextField
            name="password"
            label={t('forms:Password')}
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  ></IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="confirmPassword"
            label={t('forms:ConfirmPassword')}
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                  ></IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="address"
            label="Address"
            margin="normal"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            fullWidth
          />
          <TextField
            name="address"
            label="Address2"
            margin="normal"
            value={formik.values.address2}
            onChange={formik.handleChange}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
            fullWidth
          />
          <TextField
            name="city"
            label="City"
            margin="normal"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            fullWidth
          />
          <TextField
            name="country"
            label="Country"
            margin="normal"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            fullWidth
          />
          <TextField
            name="postcode"
            label="Postal Code"
            margin="normal"
            value={formik.values.postcode}
            onChange={formik.handleChange}
            error={formik.touched.postcode && Boolean(formik.errors.postcode)}
            helperText={formik.touched.postcode && formik.errors.postcode}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            {t('register:RegisterBtn')}
          </Button>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 1 }}
            >
              <Link href={FORGOT_PASSWORD_PAGE}>
                <Typography sx={{ cursor: 'pointer' }}>
                  {t('register:ForgotPassword')}
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: 'center', md: 'right' }, mt: 1 }}
            >
              <Link href={LOGIN_PAGE}>
                <Typography sx={{ cursor: 'pointer' }}>
                  {t('register:HaveAccount')}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
