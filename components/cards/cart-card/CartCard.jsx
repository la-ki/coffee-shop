import { Box, Button, ButtonGroup, Card, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import PropType from 'prop-types';
import { useState } from 'react';

const CartCard = ({ product, initialQuantity, remove, updateQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { t } = useTranslation('cart');
  return (
    <Card
      sx={{
        backgroundColor: '#f2f2f2',
        p: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 2, md: 0 },
          }}
        >
          <Image src={product.image} alt="profile" width={200} height={200} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            width: { md: '40%' },
          }}
        >
          <Typography
            align="center"
            sx={{
              mb: { xs: 5, sm: 5, md: 0 },
              mr: { md: 5 },
              width: '100%',
              fontWeight: 600,
              fontSize: { xs: 20, sm: 20 },
            }}
          >
            {product?.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            justifyContent: 'center',
            alignItems: { xs: 'flex-end', md: 'center' },
            mb: { xs: 5, sm: 5, md: 0 },
            mr: { md: 5 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              mr: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                width: '100%',
                textAlign: 'center',
                height: 16,
                fontSize: 14,
              }}
            >
              {t('cart:quantity')}
            </Typography>
            <ButtonGroup
              size="small"
              aria-label="small outlined button group"
              sx={{
                height: 35,
                mt: 1,
                backgroundColor: 'primary.main',
                color: 'white',
                border: 0,
              }}
            >
              <Button
                sx={{
                  color: 'white',
                  fontSize: 17,
                  width: 25,
                }}
                onClick={() => {
                  if (quantity > 1) {
                    updateQuantity(product?.customID, quantity - 1);
                    setQuantity((prevState) => prevState - 1);
                  }
                }}
              >
                -
              </Button>
              <Button
                sx={{
                  color: 'white',
                  fontSize: 15,
                  width: 25,
                }}
              >
                {quantity}
              </Button>
              <Button
                sx={{
                  color: 'white',
                  fontSize: 17,
                  width: 25,
                }}
                onClick={() => {
                  updateQuantity(product?.customID, quantity + 1);
                  setQuantity((prevState) => prevState + 1);
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </Box>
          <Button
            disableRipple
            sx={{
              height: 35,
              mt: 1,
              width: 118,
              fontSize: 15,
              textTransform: 'none',
              backgroundColor: '#C6453E',
              color: 'white',
            }}
            startIcon={
              <Image src="/images/x.svg" alt="remove" width={15} height={15} />
            }
            onClick={() => remove(product.customID)}
          >
            {t('cart:remove')}
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              height: 25,
              fontSize: { xs: 15, md: 18 },
            }}
          >
            {t('cart:priceTag')}
            {product?.price}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

CartCard.propTypes = {
  product: PropType.shape({
    category: PropType.string,
    name: PropType.string,
    image: PropType.string,
    description: PropType.string,
    place: PropType.string,
    people: PropType.string,
    process: PropType.string,
    pairing: PropType.string,
    //available: PropType.Boolean,
    //isFeatured: PropType.Boolean,
    price: PropType.number,
    customID: PropType.string,
  }),
  initialQuantity: PropType.number,
  remove: PropType.func,
  updateQuantity: PropType.func,
};
export default CartCard;
