import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import LoadMore from '../buttons/load-more/LoadMore';
import GridItem from '../grid-item/GridItem';
import ProductCard from '../product-card/ProductCard';

const ProductsGrid = ({
  allProducts,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}) => {
  const dataToDisplay = allProducts.pages.map((page) =>
    page.product.map((item) => (
      <GridItem key={item._id}>
        <ProductCard product={item} />
      </GridItem>
    ))
  );

  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Grid container spacing={2}>
        {dataToDisplay}
      </Grid>
      <Box textAlign="center" mt={-5} mb={5}>
        {hasNextPage && (
          <LoadMore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
          />
        )}
      </Box>
    </Container>
  );
};

export default ProductsGrid;
