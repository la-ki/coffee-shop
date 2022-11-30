import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';

const ProductsHero = () => {
  const { t } = useTranslation('products');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          mt: 25,
          mb: 10,
        }}
      >
        <Typography
          fontFamily={'body1.fontFamily'}
          align="center"
          color="primary.main"
          mb={3}
          sx={{
            fontSize: { md: '64px', sm: '46px', xs: '32px' },
          }}
        >
          {t('products:title')}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '16px', sm: '18px', md: '24px' } }}
          align="center"
        >
          {t('products:description')}
        </Typography>
      </Container>
    </Box>
  );
};

export default ProductsHero;
