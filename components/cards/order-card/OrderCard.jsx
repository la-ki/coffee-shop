import { Card, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import PropType from 'prop-types';

const OrderCard = ({ data }) => {
  const { t } = useTranslation('profile');
  return (
    <Card
      height="100%"
      sx={{
        backgroundColor: '#f2f2f2',
        mb: 2,
        p: 2,
        mx: { xs: 0, sm: 1 },
        width: { xs: '100%', sm: '47%', md: '100%', lg: '100%' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          {t('profile:orderDate')}
          {data.date}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1 }}>
          {t('profile:by')}
          {data.name}
        </Typography>
        <Typography>
          {t('profile:total')}
          {data.totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Card>
  );
};

OrderCard.propTypes = {
  data: PropType.shape({
    date: PropType.string,
    name: PropType.string,
    totalPrice: PropType.number,
  }),
};

export default OrderCard;
