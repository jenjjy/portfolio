import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconButton, MenuItem, withStyles } from '@material-ui/core';
import {
  Dashboard,
  DonutLarge,
  Extension,
  Fingerprint,
  Home,
  Mail,
  Menu
} from '@material-ui/icons';
import styles from './index.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { hideMenu: true, width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  /**
   * Calculate & Update state of new width dimensions
   */

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  /**
   * Event Handlers
   */
  toggleMenu = () => {
    this.setState({ hideMenu: !this.state.hideMenu });
  };

  render() {
    const { width } = this.state;

    return (
      <div className="navbar">
        {!this.state.hideMenu && width < 600 ? (
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
        ) : null}

        {width < 600 ? (
          <a
            className="menu-wrapper"
            onClick={() => {
              this.toggleMenu();
            }}
          >
            <Menu className="menu" />
          </a>
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
      </div>
    );
  }
}

Navbar.propTypes = {
  width: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(Navbar));
