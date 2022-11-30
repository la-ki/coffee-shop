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
import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  BASE_PAGE,
  FORGOT_PASSWORD_PAGE,
  REGISTER_PAGE,
} from '../../../constants/pages';
import { loginSchema } from '../../../schemas/loginSchema';
import ErrorMessageComponent from '../../mui/ErrorMessageComponent';

const LoginForm = () => {
  const { t } = useTranslation('forms', 'login');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const router = useRouter();
  const [error, setError] = useState({ hasError: false, errorMessage: '' });

  const submitHandler = async (values) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: values.username,
      password: values.password,
    });
    if (!result.error) {
      router.replace(BASE_PAGE);
    } else {
      setError({ hasError: true, errorMessage: result.error });
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: submitHandler,
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
          {t('login:Title')}
        </Typography>
        {error.hasError && <ErrorMessageComponent error={error.errorMessage} />}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ position: 'relative', mt: 1, p: 1 }}
        >
          <TextField
            name="username"
            label={t('forms:Username')}
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            autoFocus
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
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            {t('login:LoginBtn')}
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
                  {t('login:ForgotPassword')}
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'right',
                },
                mt: 1,
              }}
            >
              <Link href={REGISTER_PAGE}>
                <Typography sx={{ cursor: 'pointer' }}>
                  {t('login:NoAccount')}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
