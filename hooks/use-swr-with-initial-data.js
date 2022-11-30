import { useEffect, useRef } from 'react';
import useSWR from 'swr';

export default function useSWRWithFallbackData(key, fetcher, options = {}) {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return useSWR(key, fetcher, {
    ...options,
    fallbackData: hasMounted.current ? undefined : options?.fallbackData,
  });
}
