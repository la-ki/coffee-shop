import { Box } from '@mui/system';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ height: '80%' }}
    >
      {value === index && (
        <Box
          display="flex"
          flexDirection="column"
          alignContent="space-between"
          sx={{ pt: 3, pl: 3, width: '100%', height: '100%' }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
