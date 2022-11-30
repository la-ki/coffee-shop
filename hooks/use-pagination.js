import { useQuery } from '@tanstack/react-query';
import { getData } from '../requests/dataRequest';

export const usePagination = (activePage) => {
  return useQuery(['randomData', activePage], () => getData(activePage), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
