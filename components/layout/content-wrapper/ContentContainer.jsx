import { Box } from '@mui/system';

const ContentContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mr: { xs: 2, md: 12 },
        ml: { xs: 2, md: 12 },
      }}
    >
      {children}
    </Box>
  );
};

export default ContentContainer;
