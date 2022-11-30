import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CircularIndeterminate = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    loading && (
      <Box
        sx={{
          display: 'flex',
          zIndex: 99,
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '48%',
            left: '48%',
            marginX: 'auto',
            color: 'primary.dark',
          }}
        >
          <CircularProgress color="inherit" size={60} thickness={4} />
        </Box>
      </Box>
    )
  );
};

export default CircularIndeterminate;
