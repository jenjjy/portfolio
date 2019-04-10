import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import './index.scss';
import TitleWrapper from '../../components/TitleWrapper';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Projects</h1>
      </div>
    );
  }
}

Projects.propTypes = {};

export default Projects;
