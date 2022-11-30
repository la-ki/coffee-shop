import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import PropType from 'prop-types';
import { useEffect, useState } from 'react';
import { useStore, useStoreUpdate } from '../../../store/cart-context';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const FeaturedProduct = ({ product, bColor, side }) => {
  const matches = useMediaQuery('(min-width: 900px)');
  const data = { name: product.name, description: product.description };
  const { addCartValue } = useStoreUpdate();
  const { cartStorage } = useStore();
  const addProductToCart = (quantity) => addCartValue(product, quantity);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (cartStorage) {
      if (
        cartStorage?.some((item) => item.product.customID === product.customID)
      )
        setInCart(true);
    }
  }, [cartStorage, product.customID]);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: bColor === 'dark' ? 'primary.main' : 'primary.light',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: '30px 0 30px 0',
        alignItems: { md: 'center' },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: { md: 'flex' }, alignItems: { md: 'center' } }}
      >
        {side === 'left' ? (
          <ProductImage image={product.image}></ProductImage>
        ) : !matches ? (
          <ProductImage image={product.image}></ProductImage>
        ) : (
          <ProductInfo
            bColor={bColor}
            side={side}
            data={data}
            addProductToCart={addProductToCart}
            inCart={inCart}
          ></ProductInfo>
        )}
        {side === 'left' ? (
          <ProductInfo
            bColor={bColor}
            side={side}
            data={data}
            addProductToCart={addProductToCart}
            inCart={inCart}
          ></ProductInfo>
        ) : !matches ? (
          <ProductInfo
            bColor={bColor}
            side={side}
            data={data}
            addProductToCart={addProductToCart}
            inCart={inCart}
          ></ProductInfo>
        ) : (
          <ProductImage image={product.image}></ProductImage>
        )}
      </Container>
    </Box>
  );
};

FeaturedProduct.propTypes = {
  product: PropType.shape({
    category: PropType.string,
    name: PropType.string,
    image: PropType.string,
    description: PropType.string,
    place: PropType.string,
    people: PropType.string,
    process: PropType.string,
    pairing: PropType.string,
    available: PropType.Boolean,
    isFeatured: PropType.Boolean,
    price: PropType.number,
    customID: PropType.string,
  }),
  bColor: PropType.string,
  side: PropType.string,
};
export default FeaturedProduct;
