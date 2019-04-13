import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Drawer, IconButton, MenuItem, withStyles } from '@material-ui/core';
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

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true,
      top: false,
      Transition: null,
      width: 0
    };
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
  toggleDrawer = (_args, open) => () => {
    this.setState({
      top: open
    });
  };

  handleClick = Transition => () => {
    this.setState({ hideMenu: false, Transition });
  };
  handleClose = () => {
    this.setState({ hideMenu: true });
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
        {!this.state.top && width < 600 ? (
          <Drawer
            className="navbar"
            anchor="top"
            open={this.state.top}
            onClose={this.toggleDrawer('top', false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('top', false)}
              onKeyDown={this.toggleDrawer('top', false)}
            >
              <div className="navlinks">
                <NavLink
                  to="/"
                  exact
                  className="links"
                  activeClassName="active"
                >
                  <Home />
                  Home
                </NavLink>
                <NavLink to="/about" className="links" activeClassName="active">
                  <Fingerprint />
                  About
                </NavLink>
                <NavLink
                  to="/skills"
                  className="links"
                  activeClassName="active"
                >
                  <DonutLarge />
                  skills
                </NavLink>
                <NavLink
                  to="/projects"
                  className="links"
                  activeClassName="active"
                >
                  <Extension />
                  projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="links"
                  activeClassName="active"
                >
                  <Mail />
                  contact
                </NavLink>
              </div>
            </div>
          </Drawer>
        ) : null}

        {width < 600 ? (
          <a
            className="menu-wrapper"
            onClick={() => {
              // this.toggleMenu();
              this.toggleDrawer('top', true);
            }}
          >
            <Menu className="menu" />
          </a>
        ) : (
          { menubar }
        )}
      </div>
    );
  }
}

Navbar.propTypes = {};

export default withRouter(withStyles(styles)(Navbar));
