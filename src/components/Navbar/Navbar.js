import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import styles from './index.scss';
import {
  Dashboard,
  DonutLarge,
  Extension,
  Fingerprint,
  Home,
  Mail,
  Menu
} from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  state = {
    top: false,
    width: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleDrawer = (_args, open) => () => {
    this.setState({
      top: open
    });
  };

  render() {
    const { width } = this.state;

    const menubar = (
      <div className="navlinks">
        <NavLink to="/" exact className="links" activeClassName="active">
          <Home />
          Home
        </NavLink>
        <NavLink to="/about" className="links" activeClassName="active">
          <Fingerprint />
          About
        </NavLink>
        <NavLink to="/skills" className="links" activeClassName="active">
          <DonutLarge />
          skills
        </NavLink>
        <NavLink to="/projects" className="links" activeClassName="active">
          <Extension />
          projects
        </NavLink>
        <NavLink to="/contact" className="links" activeClassName="active">
          <Mail />
          contact
        </NavLink>
      </div>
    );

    return (
      <div className="navbar">
        {width < 600 ? (
          <Button className="menu-btn" onClick={this.toggleDrawer('top', true)}>
            <Menu className="menu" />
          </Button>
        ) : (
          <div className="navlinks">
            <NavLink to="/" exact className="links" activeClassName="active">
              <Home />
              Home
            </NavLink>
            <NavLink to="/about" className="links" activeClassName="active">
              <Fingerprint />
              About
            </NavLink>
            <NavLink to="/skills" className="links" activeClassName="active">
              <DonutLarge />
              skills
            </NavLink>
            <NavLink to="/projects" className="links" activeClassName="active">
              <Extension />
              projects
            </NavLink>
            <NavLink to="/contact" className="links" activeClassName="active">
              <Mail />
              contact
            </NavLink>
          </div>
        )}

        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
        >
          <div
            className="bar-wrapper"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {menubar}
          </div>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  //   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
