const { CircularProgress, Box } = require('@mui/material');

const LoadingSpinner = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
