import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

const EmptyCart = () => {
  const { t } = useTranslation('cart');
  return (
    <Typography
      sx={{
        mr: { lg: 1 },
        mt: 6,
        height: '100%',
        textAlign: 'center',
        fontSize: { xs: 36, md: 45 },
        mb: { md: 5 },
      }}
    >
      {t('cart:empty')}
    </Typography>
  );
};

export default EmptyCart;
