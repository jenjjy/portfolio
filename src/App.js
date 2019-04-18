import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.scss';
import BgWrapper from './components/BgWrapper';

/** Pages */
import Menubar from './components/Menubar';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Menubar />

        <Home />
        <BgWrapper>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </BgWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
