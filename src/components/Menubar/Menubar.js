import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { withStyles } from '@material-ui/core/styles';
import { Button, Drawer, Fab } from '@material-ui/core';
import styles from './index.scss';
import { Slide } from 'react-reveal';
import finn from '../../images/icons/finn.png';
import jake from '../../images/icons/jake.png';
import bmo from '../../images/icons/bmo.png';
import lps from '../../images/icons/lumpy-space-princess.png';
import pb from '../../images/icons/princess-bubblegum.png';
import marceline from '../../images/icons/marceline.png';

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
          <img alt="" className="nav-img" src={finn} />
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
          <img alt="" className="nav-img" src={jake} height="60" />
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
          <img alt="" className="nav-img" src={lps} />
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
          <img alt="" className="nav-img" src={pb} />
          contact
        </Link>
      </div>
    );

    return (
      <div className="menubar">
        <Slide left>
          <div className="bmo-wrapper">
            <Fab
              color="secondary"
              className="bmo-btn"
              onClick={this.toggleDrawer('top', true)}
            >
              <div>
                <img alt="" className="bmo-icon" src={bmo} />
                {/* <p className="bmo-text">Menu</p> */}
              </div>
            </Fab>
          </div>
        </Slide>

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
