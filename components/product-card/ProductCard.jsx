import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';
import { useStore, useStoreUpdate } from '../../store/cart-context';

const ProductCard = ({ product }) => {
  const { t } = useTranslation('products');
  const { addCartValue } = useStoreUpdate();
  const { cartStorage } = useStore();
  const addProductToCart = (quantity) => addCartValue(product, quantity);
  const inCart = cartStorage?.some(
    (item) => item.product.customID === product.customID
  )
    ? true
    : false;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: 'none',
        mb: '15px',
        backgroundColor: '#F5ECD4',
      }}
    >
      <Box width="100%" sx={{ cursor: 'pointer' }}>
        <NextLink
          style={{ cursor: 'pointer' }}
          href={`/products/${product.customID}`}
          passHref
        >
          <a>
            <Image
              src={product.image}
              alt="product image"
              width={500}
              height={390}
            />
          </a>
        </NextLink>
      </Box>
      <Box
        width="100%"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{ height: '100px' }}
          fontSize="24px"
          align="center"
          pt={1}
          pb={3}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            height: { xs: '200px', sm: '250px', md: '250px', lg: '200px' },
          }}
          align="center"
          fontSize="18px"
          m={2}
        >
          {product.description.length > 250
            ? product.description.slice(0, 250) + '...'
            : product.description}
        </Typography>
        <Typography fontSize="24px" align="center" pt={4}>
          ${product.price}
        </Typography>
        <Box textAlign="center" mt={1}>
          <Button
            disableRipple
            disableFocusRipple
            disabled={inCart}
            onClick={() => addProductToCart(1)}
            sx={{
              '&.Mui-disabled': {
                backgroundColor: '#f2d675',
                color: '#464646',
              },
              '&:hover': {
                backgroundColor: '#f2d675',
                color: '#464646',
                boxShadow: 'none',
              },
              backgroundColor: '#CBA213',
              height: 50,
              width: 150,
              color: 'white',
            }}
          >
            {inCart ? t('products:in') : t('products:add')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
