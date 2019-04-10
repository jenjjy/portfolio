import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { IconButton, withStyles } from '@material-ui/core';
import {
  Dashboard,
  Extension,
  Fingerprint,
  Home,
  Mail,
  DonutLarge
} from '@material-ui/icons';
import './index.scss';

const Navbar = () => (
  <div className="navbar">
    <div>
      <NavLink to="/" exact className="links" activeClassName="active">
        <Home />
        Home
      </NavLink>
    </div>
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

export default withRouter(Navbar);
