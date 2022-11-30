import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';

//drawer elements used
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../../../store/cart-context';
import { useUserUpdate } from '../../../store/user-context';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function MainNav() {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const matches = useMediaQuery('(min-width: 900px)');

  const router = useRouter();

  const { data: session } = useSession();

  const { totalQuantity } = useStore();

  const { clearUser } = useUserUpdate();

  const signOutHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    clearUser();
    router.push(data.url);
  };

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  useEffect(() => {
    if (matches) {
      setState(false);
    }
  }, [matches]);

  useEffect(() => {
    setCartQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <AppBar
      position="absolute"
      sx={{
        zIndex: 100,
        top: 20,
        width: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        height: 40,
      }}
    >
      <Toolbar sx={{ width: '100%' }}>
        <DesktopNav
          router={router}
          totalQuantity={cartQuantity}
          session={session}
          signOutHandler={signOutHandler}
        />
        <IconButton
          edge="start"
          color={router.pathname === '/' ? 'inherit' : 'primary'}
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* The outside of the drawer */}
        <MobileNav
          totalQuantity={totalQuantity}
          session={session}
          signOutHandler={signOutHandler}
          toggleDrawer={toggleDrawer}
          open={open}
        />
      </Toolbar>
    </AppBar>
  );
}
