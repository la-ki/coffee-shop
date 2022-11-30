import { Box } from '@mui/system';

const PageWrapper = ({ children }) => {
  return <Box sx={{ py: 10, height: '100%', width: '100%' }}>{children}</Box>;
};

export default PageWrapper;
