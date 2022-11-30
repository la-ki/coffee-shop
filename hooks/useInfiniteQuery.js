import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllProducts } from '../requests/products/productRequest';

export const useInfiniteProducts = (category, filter) => {
  return useInfiniteQuery(
    ['products', category, filter],
    async ({ pageParam = 1 }) =>
      await getAllProducts(
        pageParam,
        category === '' ? 'All' : category,
        filter === '' ? 'asc' : filter
      ),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next !== null) {
          return pages.length + 1;
        }
      },
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: 300000,
    }
  );
};
