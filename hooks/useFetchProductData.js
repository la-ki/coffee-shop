import { useQuery } from '@tanstack/react-query';
import { getProductData } from '../requests/products/producDataRequest';

export const useFetchSingleProduct = (customID) => {
  return useQuery(
    ['product', customID],
    async () => await getProductData(customID),
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: 300000,
    }
  );
};
