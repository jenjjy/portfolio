import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { withStyles } from '@material-ui/core/styles';
import { Button, Drawer } from '@material-ui/core';
import styles from './index.scss';
import { Slide, Tada } from 'react-reveal';
import finn from '../../images/icons/finn.png';
import jake from '../../images/icons/jake.png';
import bmo from '../../images/icons/bmo.png';
import lps from '../../images/icons/lumpy-space-princess.png';
import pb from '../../images/icons/princess-bubblegum.png';

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
          <img alt="" className="navicons" src={finn} />
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
          <img alt="" className="navicons" src={jake} height="60" />
          About
        </Link>

        <Link
          to="projects"
          className="links"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img alt="" className="navicons" src={lps} />
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
          <img alt="" className="navicons" src={pb} />
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
                <img alt="" className="menu-icon" src={bmo} />
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
