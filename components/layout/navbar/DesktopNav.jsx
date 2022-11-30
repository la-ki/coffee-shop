import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { CART_PAGE, PROFILE_PAGE } from '../../../constants/pages';
import { NavItemDesktop } from './NavItem';
import { items } from './navItems';

const DesktopNav = ({ router, totalQuantity, session, signOutHandler }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }}>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: '50%',
          height: 30,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {items.map((item) => (
          <NavItemDesktop
            key={item.id}
            router={router}
            name={item.name}
            url={item.url}
          />
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: '50%',
          height: 30,
          display: 'flex',
          justifyContent: 'right',
          pt: 0.5,
          mr: 4,
        }}
      >
        {session?.user?._id && (
          <Box
            sx={{
              mx: 2,
              mt: 0.1,
              cursor: 'pointer',
            }}
            onClick={signOutHandler}
          >
            <Image
              src="/images/logout.svg"
              alt="profile"
              width={18}
              height={20}
            />
          </Box>
        )}
        <Box
          sx={{
            mx: 2,
            cursor: 'pointer',
          }}
        >
          <Link key="home" href={PROFILE_PAGE}>
            <a>
              <Image
                src="/images/profile.svg"
                alt="profile"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </Box>
        <Box
          sx={{
            mr: 6,
            ml: 2,
            cursor: 'pointer',
          }}
        >
          <Link key="home" href={CART_PAGE}>
            <a>
              <Box>
                {totalQuantity !== 0 && (
                  <Box
                    sx={{
                      color: 'white',
                      zIndex: 3,
                      width: 20,
                      height: 20,
                      borderRadius: 20,
                      textAlign: 'center',
                      px: 0.5,
                      ml: 2.2,
                      mt: -1,
                      fontSize: 17,
                      position: 'absolute',
                      backgroundColor: 'primary.main',
                    }}
                  >
                    {totalQuantity}
                  </Box>
                )}
                <Image
                  src="/images/cart.svg"
                  alt="cart"
                  width={24}
                  height={24}
                />
              </Box>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopNav;
