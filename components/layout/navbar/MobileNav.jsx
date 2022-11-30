import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, Divider, Drawer, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { CART_PAGE, PROFILE_PAGE } from '../../../constants/pages';
import { NavItemMobile } from './NavItem';
import { items } from './navItems';

const MobileNav = ({
  toggleDrawer,
  session,
  signOutHandler,
  open,
  totalQuantity,
}) => {
  return (
    <Drawer
      PaperProps={{
        sx: { width: { xs: '60%', sm: '50%' } },
      }}
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{
          p: 2,
          height: 1,
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <IconButton disableRipple onClick={toggleDrawer(false)}>
            <CloseIcon color="primary" />
          </IconButton>

          {session?.user?._id && (
            <IconButton disableRipple onClick={signOutHandler}>
              <Image
                src="/images/logout.svg"
                alt="profile"
                width={18}
                height={20}
              />
            </IconButton>
          )}
        </Box>

        <Divider sx={{ mb: session?.user?._id ? 0 : 2 }} />

        {session?.user?._id && (
          <>
            <Box display="flex" flexDirection="column" sx={{ ml: 1 }}>
              <NavItemMobile
                icon={<AccountCircleIcon sx={{ color: '#664c47' }} />}
                toggleDrawer={toggleDrawer}
                name="Profile"
                url={PROFILE_PAGE}
              />
            </Box>
            <Divider sx={{ mb: 2 }} />
          </>
        )}

        <Box sx={{ mb: 2, ml: 1 }} display="flex" flexDirection="column">
          {items.map((item) => (
            <NavItemMobile
              key={item.id}
              icon={item.icon}
              toggleDrawer={toggleDrawer}
              name={item.name}
              url={item.url}
            />
          ))}

          <Divider sx={{}} />
          <NavItemMobile
            totalQuantity={totalQuantity}
            icon={<ShoppingCartIcon sx={{ color: '#664c47' }} />}
            toggleDrawer={toggleDrawer}
            name="Cart"
            url={CART_PAGE}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        >
          {!session?.user?._id && (
            <>
              <Link href="/auth/register">
                <Button
                  onClick={toggleDrawer(false)}
                  variant="contained"
                  sx={{ m: 1, width: 0.5 }}
                >
                  Register
                </Button>
              </Link>
              <Link href="/auth">
                <Button
                  onClick={toggleDrawer(false)}
                  variant="outlined"
                  sx={{ m: 1, width: 0.5 }}
                >
                  Login
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
