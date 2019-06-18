/** External Imports */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

/** Internal Imports */
import theme from './theme';
import './App.scss';
import Layout from './routes/Layout';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
