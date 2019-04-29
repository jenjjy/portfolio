import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Drawer } from '@material-ui/core';
import styles from './index.scss';
import { Slide } from 'react-reveal';
// import {
//   DonutLarge,
//   Extension,
//   Fingerprint,
//   Home,
//   Mail,
//   Menu
// } from '@material-ui/icons';

import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

class Menubar extends Component {
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
    const navbar = (
      <div className="navlinks">
        <Link
          activeClass="active"
          className="links"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img
            alt=""
            className="navicons"
            src="https://img.icons8.com/color/96/000000/finn.png"
          />
          Home
        </Link>
        <Link
          to="about"
          className="links about-link"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img
            alt=""
            className="navicons"
            src="https://img.icons8.com/color/96/000000/jake.png"
            height="60"
          />
          About
        </Link>
        <Link
          to="skills"
          className="links"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img
            alt=""
            className="navicons"
            src="https://img.icons8.com/color/96/000000/princess-bubblegum.png"
          />
          skills
        </Link>
        <Link
          to="projects"
          className="links"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          {/* <Extension /> */}
          <img
            alt=""
            className="navicons"
            src="https://img.icons8.com/color/96/000000/lumpy-space-princess.png"
          />
          projects
        </Link>
        <Link
          to="contact"
          className="links"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img
            alt=""
            className="navicons"
            src="https://img.icons8.com/color/96/000000/ice-king.png"
          />
          contact
        </Link>
      </div>
    );

    return (
      <div className="menubar">
        <div className="menu-wrapper">
          <Button
            className="button-menu"
            onClick={this.toggleDrawer('top', true)}
          >
            <Slide left>
              <div className="menu-btn">
                <img
                  alt=""
                  className="menu-icon"
                  src="https://img.icons8.com/color/96/000000/bmo.png"
                />
                <p className="menu-text">Menu</p>
              </div>
            </Slide>
          </Button>
        </div>

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
            {navbar}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Menubar);
