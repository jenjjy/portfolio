/** External Imports */
import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Element, Events } from 'react-scroll';

/** Internal Imports */
import Menubar from '../components/Menubar';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
    Scroll.scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <>
        <Menubar />

        <Element name="home" className="">
          <Home />
        </Element>

        <Element name="about" className="">
          <About />
        </Element>

        <Element name="projects" className="">
          <Projects />
        </Element>

        <Element name="contact" className="">
          <Contact />
        </Element>
      </>
    );
  }
}

export default Main;
