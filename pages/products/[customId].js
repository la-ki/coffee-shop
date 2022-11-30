import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import GridItem from '../../components/grid-item/GridItem';
import Loader from '../../components/loader/Loader';
import ProductCard from '../../components/product-card/ProductCard';
import TabContent from '../../components/tab-content/TabContent';
import { useFetchSingleProduct } from '../../hooks/useFetchProductData';
import { getProductData } from '../../requests/products/producDataRequest';
import { useStore, useStoreUpdate } from '../../store/cart-context';

const SingleProduct = () => {
  const { t } = useTranslation('products');
  const { addCartValue } = useStoreUpdate();
  const { cartStorage } = useStore();

  const router = useRouter();

  const { customId } = router.query;

  const { data, isLoading } = useFetchSingleProduct(customId);

  const addProductToCart = (quantity) => addCartValue(data.product, quantity);
  const inCart = cartStorage?.some(
    (item) => item.product.customID === data?.product.customID
  )
    ? true
    : false;

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container>
        <Typography
          fontFamily={'body1.fontFamily'}
          fontSize="32px"
          sx={{ mt: 25, height: '100%', color: 'primary.main' }}
        >
          {data.product.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid sx={{ display: 'flex' }} item md={6} sm={12}>
            <Image
              src={data.product.image}
              alt="product"
              width={900}
              height={700}
            />
          </Grid>
          <TabContent
            description={data?.product.description}
            inCart={inCart}
            price={data?.product.price}
            category={data?.product.category}
            addProductToCart={addProductToCart}
          />
        </Grid>

        <Typography
          sx={{
            mt: { xs: '60px', md: '100px', lg: '150px' },
            mb: 5,
            color: 'primary.main',
            fontSize: '32px',
          }}
        >
          {t('products:similar')}
        </Typography>
        <Grid container spacing={2}>
          {data.similarProducts.map((product) => (
            <GridItem key={product._id}>
              <ProductCard product={product} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { customId } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['product', customId],
    async () => await getProductData(customId)
  );

  return {
    props: {
      dehydratatedState: dehydrate(queryClient),
      ...(await serverSideTranslations(context.locale, ['products'])),
    },
  };
};

export default SingleProduct;
