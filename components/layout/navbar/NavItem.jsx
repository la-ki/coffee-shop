import { Box, ListItemButton, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';

export const NavItemMobile = ({
  toggleDrawer,
  icon,
  name,
  url,
  totalQuantity,
}) => {
  return (
    <ListItemButton>
      <Link href={url}>
        <ListItemText
          onClick={toggleDrawer(false)}
          primary={
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mt: 0.4, mr: 4 }}>{icon}</Box>
              <Typography
                sx={{ fontSize: '22px' }}
                style={{ color: 'primary.main' }}
              >
                {name}
              </Typography>
              {name === 'Cart' && totalQuantity !== 0 && (
                <Box
                  sx={{
                    color: 'white',
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    textAlign: 'center',
                    ml: 2.6,
                    mt: '-7px',
                    fontSize: 15,
                    position: 'absolute',
                    backgroundColor: 'primary.main',
                  }}
                >
                  {totalQuantity}
                </Box>
              )}
            </Box>
          }
        />
      </Link>
    </ListItemButton>
  );
};

export const NavItemDesktop = ({ url, router, name }) => {
  return (
    <Box sx={{ width: 150, mr: 3, ml: 3 }}>
      <Link href={url}>
        <Typography
          textAlign="center"
          sx={{
            mx: 'auto',
            width: '100%',
            fontSize: { md: 24, lg: 24 },
            mt: -1,
            fontWeight: 500,
            color: router.pathname === '/' ? 'white' : 'primary.main',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          {name}
        </Typography>
      </Link>
    </Box>
  );
};
