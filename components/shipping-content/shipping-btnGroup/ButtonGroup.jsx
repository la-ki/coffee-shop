import { Box, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import PropType from 'prop-types';

const ButtonGroup = ({ handleBackToCart, handleStripePayment }) => {
  const { t } = useTranslation('shipping');
  return (
    <Box
      sx={{
        display: 'flex',
        mb: 2,
        borderRadius: 2,
      }}
    >
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
        onClick={handleBackToCart}
      >
        {t('shipping:back')}
      </Button>
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: '#CBA213',
          height: 50,
          width: 200,
          textTransform: 'none',
          color: 'white',
        }}
        onClick={handleStripePayment}
      >
        {t('shipping:continue')}
      </Button>
    </Box>
  );
};

ButtonGroup.propTypes = {
  handleBackToCart: PropType.func,
  handleStripePayment: PropType.func,
};

export default ButtonGroup;
