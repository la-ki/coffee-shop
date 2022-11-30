import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import PropType from 'prop-types';

const ShippingData = ({ email, address, city, postcode, handleOpen }) => {
  const { t } = useTranslation('shipping');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#f2f2f2',
          alignItems: 'center',
          mb: 2,
          borderRadius: 2,
          p: 1,
        }}
      >
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
          {t('shipping:contact')}
        </Typography>
        <Typography>{email}</Typography>
        <Button
          sx={{
            height: 35,
            minWidth: { md: 125, xs: 90 },
            fontSize: 15,
            textTransform: 'none',
            backgroundColor: '#CBA213',
            color: 'white',
          }}
          onClick={() => {
            handleOpen('Contact');
          }}
        >
          {t('shipping:changeBtn')}
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#f2f2f2',
          alignItems: 'center',
          mb: 2,
          borderRadius: 2,
          p: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { md: 18, xs: 16 },
            fontWeight: 600,
            mr: { xs: 1, sm: 0 },
          }}
        >
          {t('shipping:shipping')}
        </Typography>
        <Typography>
          {address} | {city} | {postcode}
        </Typography>
        <Button
          sx={{
            height: 35,
            minWidth: { md: 125, xs: 90 },
            fontSize: 15,
            textTransform: 'none',
            backgroundColor: '#CBA213',
            color: 'white',
          }}
          onClick={() => {
            handleOpen('Shipping');
          }}
        >
          {t('shipping:changeBtn')}
        </Button>
      </Box>
    </>
  );
};

ShippingData.propTypes = {
  email: PropType.string,
  address: PropType.string,
  city: PropType.string,
  postcode: PropType.string,
  handleOpen: PropType.func,
};

export default ShippingData;
