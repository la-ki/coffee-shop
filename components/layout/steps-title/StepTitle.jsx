import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Divider, Grid, Typography } from '@mui/material';
import PropType from 'prop-types';

const StepTitle = ({ title, breadcrumbsArray }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            ml: { xs: 2, md: 12 },
            mt: 12,
            height: '100%',
            color: 'primary.main',
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider
          sx={{
            backgroundColor: 'primary.main',
            ml: { xs: 2, md: 12 },
            mr: { xs: 2, md: 12 },
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 4 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ ml: { xs: 2, md: 12 }, fontSize: 20 }}
        >
          {breadcrumbsArray &&
            breadcrumbsArray.map((entry, index) => {
              return (
                <Typography
                  sx={{ fontSize: { xs: '16px', md: '22px' } }}
                  key={index}
                  color={
                    index === breadcrumbsArray.length - 1 ? 'red' : 'black'
                  }
                >
                  {entry}
                </Typography>
              );
            })}
        </Breadcrumbs>
      </Grid>
    </>
  );
};

StepTitle.propTypes = {
  title: PropType.string,
  breadcrumbsArray: PropType.arrayOf(PropType.string),
};

export default StepTitle;
