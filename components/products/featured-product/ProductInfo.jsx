import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import PropType from 'prop-types';
import { useState } from 'react';

const ProductInfo = ({ data, bColor, addProductToCart, inCart }) => {
  const { t } = useTranslation('home');
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        width: { xs: '100%', md: '50%' },
        height: '100%',
      }}
    >
      <Typography variant="h3" sx={{ mt: { xs: 5 }, color: 'white' }}>
        {data.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          width: '100%',
          py: { xs: 2 },
        }}
      >
        <Image
          src="/images/Stars.svg"
          alt="reviews"
          width={100}
          height={50}
        ></Image>
      </Box>
      <Typography
        sx={{
          color: 'white',
        }}
      >
        {data.description}
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          mt: 6,
          flexDirection: { md: 'row' },
          alignItems: { xs: 'center' },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <ButtonGroup
          disabled={inCart}
          size="small"
          aria-label="small outlined button group"
          sx={{
            height: 50,
            backgroundColor: bColor === 'light' ? '#664c47' : '#8f7772',
            color: 'white',
            border: 0,
          }}
        >
          <Button
            disableRipple
            sx={{
              '&.Mui-disabled': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
              color: 'white',
              fontSize: 20,
              width: 50,
            }}
            onClick={() => {
              handleDecrement();
            }}
          >
            -
          </Button>
          <Button
            disableRipple
            sx={{
              '&.Mui-disabled': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
              color: 'white',
              fontSize: 17,
              width: 50,
            }}
          >
            {quantity}
          </Button>
          <Button
            disableRipple
            sx={{
              '&.Mui-disabled': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
              color: 'white',
              fontSize: 20,
              width: 50,
            }}
            onClick={() => {
              handleIncrement();
            }}
          >
            +
          </Button>
        </ButtonGroup>
        <Button
          disableRipple
          sx={{
            mt: { md: 0 },
            ml: { xs: 2 },
            backgroundColor: '#CBA213',
            height: 50,
            width: 150,
            color: 'white',
            '&.Mui-disabled': {
              backgroundColor: '#f2d675',
              color: '#464646',
            },
            '&:hover': {
              backgroundColor: '#f2d675',
              color: '#464646',
              boxShadow: 'none',
            },
          }}
          disabled={inCart}
          onClick={() => addProductToCart(quantity)}
        >
          {inCart ? t('home:in') : t('home:add')}
        </Button>
      </Box>
    </Box>
  );
};

ProductInfo.propTypes = {
  data: PropType.shape({
    name: PropType.string,
    description: PropType.string,
  }),
  bColor: PropType.string,
  side: PropType.string,
  addProductToCart: PropType.func,
  inCart: PropType.bool,
};
export default ProductInfo;
