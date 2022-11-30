import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ loading }) => {
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
          }}
        >
          <CircularProgress color="inherit" size={60} thickness={4} />
        </Box>
      </Box>
    )
  );
};

export default Loader;
