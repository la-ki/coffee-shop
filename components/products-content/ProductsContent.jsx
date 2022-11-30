import { Box } from '@mui/system';
import Head from 'next/head';
import { useState } from 'react';
import { useInfiniteProducts } from '../../hooks/useInfiniteQuery';
import FilterSort from '../filter-sort/FilterSort';
import LoadingSpinner from '../loader/basic-spinner/LoadSpinner';
import ProductsGrid from '../products-grid/ProductsGrid';
import ProductsHero from '../products-hero/ProductsHero';

const ProductsContent = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProducts(filter, sort);

  const handleProductTypeChange = (event) => {
    const filterText = event.target.value;
    setFilter(filterText);
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSort(sort);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Random data with pagination..." />
      </Head>
      <ProductsHero />
      <FilterSort
        handleProductTypeChange={handleProductTypeChange}
        productType={filter}
        sort={sort}
        handleSortChange={handleSortChange}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductsGrid
          allProducts={data}
          sort={sort}
          productType={filter}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </Box>
  );
};

export default ProductsContent;
