import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export default () => (
  <React.Fragment>
    <Router>
      <div className="background">
        <Navbar />

        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Redirect from="*" to="/home" />;
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);
