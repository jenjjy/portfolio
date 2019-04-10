import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './routes/Layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      //   <CssBaseline />

      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>

      // </MuiThemeProvider>
    );
  }
}

export default App;
