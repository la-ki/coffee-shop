import { Box } from '@mui/system';

const CardContainer = ({ children }) => {
  return (
    <Box
      sx={{
        ml: { md: 2 },
        mt: { xs: 5, md: 0 },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
          lg: 'column',
        },
        justifyContent: { sm: 'flex-start' },
        flexWrap: 'wrap',
      }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
