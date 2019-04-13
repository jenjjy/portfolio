import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Layout from './routes/Layout';
import './App.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
