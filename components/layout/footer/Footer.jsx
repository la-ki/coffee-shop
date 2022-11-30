import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_PAGE, PRODUCTS_PAGE } from '../../../constants/pages';

const pages = [
  <Link key="home" href={BASE_PAGE}>
    <Typography
      textAlign="center"
      sx={{
        px: 1.5,
        fontSize: 20,
        fontWeight: 500,
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      Home
    </Typography>
  </Link>,
  <Link key="menu" href={BASE_PAGE}>
    <Typography
      textAlign="center"
      sx={{
        px: 1.5,
        fontSize: 20,
        fontWeight: 500,
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      Menu
    </Typography>
  </Link>,
  <Link key="about" href={BASE_PAGE}>
    <Typography
      textAlign="center"
      sx={{
        px: 1.5,
        fontSize: 20,
        fontWeight: 500,
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      About
    </Typography>
  </Link>,
  <Link key="store" href={PRODUCTS_PAGE}>
    <Typography
      textAlign="center"
      sx={{
        px: 1.5,
        fontSize: 20,
        fontWeight: 500,
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      Store
    </Typography>
  </Link>,
  <Link key="contact" href={BASE_PAGE}>
    <Typography
      textAlign="center"
      sx={{
        px: 1.5,
        fontSize: 20,
        fontWeight: 500,
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      Contact
    </Typography>
  </Link>,
];

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 220,
        flexDirection: 'column',
        bottom: 0,
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: '100%',
          textAlign: 'center',
          color: 'primary.main',
          height: 60,
          mt: 4,
        }}
      >
        Coffee Shop
      </Typography>
      <Box
        sx={{
          maxWidth: '100%',
          height: 30,
          mt: 1.5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {pages.map((page) => page)}
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: 40,
          mt: 4,
          justifyContent: 'center',
        }}
      >
        <Box sx={{ px: 2 }}>
          <Image
            src="/images/Instagram.svg"
            alt="cart"
            width={35}
            height={35}
          />
        </Box>
        <Box sx={{ px: 2 }}>
          <Image src="/images/Facebook.svg" alt="cart" width={35} height={35} />
        </Box>
        <Box sx={{ px: 2 }}>
          <Image src="/images/Twitter.svg" alt="cart" width={35} height={35} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
