import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.scss';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from 'react-scroll';
import BgWrapper from './components/BgWrapper';

/** Pages */
import Menubar from './components/Menubar';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Menubar />

        <Element name="home" className="">
          <Home />
        </Element>
        {/* <BgWrapper> */}
        <Element name="about" className="">
          <About />
        </Element>

        <Element name="skills" className="">
          <Skills />
        </Element>

        <Element name="projects" className="">
          <Projects />
        </Element>

        <Element name="contact" className="">
          <Contact />
        </Element>
        {/* </BgWrapper> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
