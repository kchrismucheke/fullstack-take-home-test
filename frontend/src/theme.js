import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#335C6E',
    },
    background: {
      default: '#CFFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#335C6E',
      secondary: '#4AA088',
    },
    warning: {
      main: '#FABD33',
    },
    error: {
      main: '#F76434',
    },
  },
});

export default theme;
