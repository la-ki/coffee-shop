import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const PageDescription = ({ description }) => {
  return (
    <Box sx={{ ml: { xs: 2, md: 12 }, my: 3 }}>
      <Typography sx={{ fontSize: 20 }}>{description}</Typography>
    </Box>
  );
};

export default PageDescription;
