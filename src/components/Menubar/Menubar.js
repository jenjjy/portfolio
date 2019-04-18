import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './index.scss';
import { Slide } from 'react-reveal';
import {
  DonutLarge,
  Extension,
  Fingerprint,
  Home,
  Mail,
  Menu
} from '@material-ui/icons';

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
    const { width } = this.state;

    const navbar = (
      <div className="navlinks">
        <a href="#about" className="links" activeClassName="active">
          <img
            clasName="navicons"
            src="https://img.icons8.com/color/96/000000/finn.png"
          />
          Home
        </a>
        <a href="#about" className="links" activeClassName="active">
          <img
            clasName="navicons"
            src="https://img.icons8.com/color/96/000000/marceline.png"
          />
          About
        </a>
        <a href="#skills" className="links" activeClassName="active">
          <img
            clasName="navicons"
            src="https://img.icons8.com/color/96/000000/princess-bubblegum.png"
          />
          skills
        </a>
        <a href="#projects" className="links" activeClassName="active">
          {/* <Extension /> */}
          <img
            clasName="navicons"
            src="https://img.icons8.com/color/96/000000/lumpy-space-princess.png"
          />
          projects
        </a>
        <a href="#contact" className="links" activeClassName="active">
          <img
            clasName="navicons"
            src="https://img.icons8.com/color/96/000000/ice-king.png"
          />
          contact
        </a>
      </div>
    );

    return (
      <div className="menubar">
        <div className="menu-wrapper">
          <a className="menu-btn" onClick={this.toggleDrawer('top', true)}>
            <Slide top>
              <img
                className="menu-icon"
                src="https://img.icons8.com/color/96/000000/jake.png"
              />
              <p className="menu-text">Menu</p>
            </Slide>
          </a>
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
