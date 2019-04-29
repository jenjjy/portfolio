import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#4aedc4', //teal // '#ffc732' yellow
      dark: '#14a37f' //dark teal
    },
    secondary: {
      main: '#e8583d' //red-orange
    },
    error: {
      main: '#FF9494'
    },

    text: {
      main: '#515152',
      light: '#fff'
    },

    background: {
      main: '#252627'
    }
  },

  typography: {
    useNextVariants: true
  }
});
