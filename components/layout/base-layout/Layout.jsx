import { Box } from '@mui/material';
import Footer from '../footer/Footer';
import MainNav from '../navbar/MainNav';

function Layout(props) {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        {/* <Navbar /> */}
        <MainNav />
        <main>{props.children}</main>
        <Footer></Footer>
      </Box>
    </>
  );
}

export default Layout;
