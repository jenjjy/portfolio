import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { Typography, withStyles } from '@material-ui/core';

const Navbar = () => (
  <div className="navbar">
    <NavLink to="/" exact className="links" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/about" className="links" activeClassName="active">
      About
    </NavLink>
    <NavLink to="/skills" className="links" activeClassName="active">
      skills
    </NavLink>
    <NavLink to="/projects" className="links" activeClassName="active">
      projects
    </NavLink>
    <NavLink to="/contact" className="links" activeClassName="active">
      contact
    </NavLink>
  </div>
);

export default Navbar;
