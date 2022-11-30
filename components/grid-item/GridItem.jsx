import { Grid } from '@mui/material';

const GridItem = ({ children }) => {
  return (
    <Grid item md={4} sm={6} xs={12} sx={{ mb: '100px' }}>
      {children}
    </Grid>
  );
};

export default GridItem;
