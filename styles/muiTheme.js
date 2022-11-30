import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      textTransform: '',
      fontSize: '82px',
    },
    h3: {
      fontFamily: ['Indie Flower', 'cursive'].join(','),
    },
    h2: {
      fontFamily: ['Indie Flower', 'cursive'].join(','),
    },
    h4: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '42px',
    },
  },
  body1: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#664c47',
      light: '#8f7772',
    },
    secondary: {
      dark: '#1f1c1a',
      main: '#c6453e',
    },
  },
});

export default theme;
