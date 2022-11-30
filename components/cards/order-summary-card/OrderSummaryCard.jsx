import { Button, Card, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import PropType from 'prop-types';

const OrderSummaryCard = ({ data }) => {
  const { t } = useTranslation('cart');
  const router = useRouter();
  return (
    <Card sx={{ p: 3, width: '100%', mb: 2, backgroundColor: '#f1f1f1' }}>
      <Typography
        sx={{
          fontSize: 26,
          color: 'primary.main',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {t('cart:orderTitle')}
      </Typography>
      <Typography sx={{ mt: 4 }}>
        {t('cart:itemsTotal')}
        {data.totalPrice.toFixed(2)}
      </Typography>
      <Typography sx={{ mt: 1.5 }}>{t('cart:shipping')}</Typography>
      <Typography sx={{ mt: 1.5, mb: 1.5 }}>
        {t('cart:total')}
        {data.totalPrice.toFixed(2)}
      </Typography>
      <Divider />
      <Box sx={{ textAlign: 'center', mt: 4, width: '100%' }}>
        <Button
          disableRipple
          sx={{
            '&.Mui-disabled': {
              backgroundColor: '#0066ff',
              color: '#fff',
              opacity: '0.6',
            },
            '&:hover': {
              backgroundColor: '#0066ff',
              color: 'white',
              boxShadow: 'none',
            },
            backgroundColor: '#0066ff',
            color: 'white',
            textTransform: 'none',
            px: 2,
          }}
          startIcon={
            <Image src="/images/lock.svg" alt="lock" width={18} height={18} />
          }
          disabled={data.totalQuantity > 0 ? false : true}
          onClick={() => {
            router.push('/checkout');
            setCookie(null, 'checkout-session', 'active', {
              maxAge: 3600,
              expires: new Date(Date.now() + 3600),
              path: '/',
            });
          }}
        >
          {t('cart:proceed')}
        </Button>
      </Box>
      <Typography sx={{ mt: 3, fontSize: 13 }}>{t('cart:infoMsg')}</Typography>
    </Card>
  );
};

OrderSummaryCard.propTypes = {
  data: PropType.shape({
    totalPrice: PropType.number,
    totalQuantity: PropType.number,
  }),
};

export default OrderSummaryCard;
