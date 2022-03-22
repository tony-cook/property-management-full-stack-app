import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#BF163D'
    },
    red: {
      main: '#BF163D',
      light: '#ce4c6a',
      dark: '#c92b50',
      contrastText: '#fafafa'
    },
    green: {
      main: '#29A754',
      light: '#55b978',
      dark: '#1d9444',
      contrastText: '#fafafa'
    },
    blue: {
      main: '#4192F2',
      light: '#64a2f3',
      dark: '#326fb9',
      contrastText: '#fafafa'
    },
    darkgrey: {
      main: '#5c5c5c',
      light: '#949494',
      dark: '#4a4a4a',
      contrastText: '#fafafa'
    },
    lightgrey: {
      main: '#c4c4c4',
      light: '#d4d4d4',
      dark: '#858585',
      contrastText: 'rgba(0,0,0,0.88)'
    },
    background: {
      main: '#ffffff',
      paper: '#F6F5F4'
    }
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontFamily: "'Noto Sans', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: '3.1rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 700
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.8rem',
      fontWeight: 500
    }
  }
});

export default theme;
