import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import msb from '../../images/projects/mainstbrewing.gif';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Mobile Apps</h1>

        <img
          src={msb}
          alt="A GIF of Main Street Brewing's rewards program app."
          height="200"
        />
        <h1 className="title">Web Apps</h1>

        <h1 className="title">Websites</h1>
      </div>
    );
  }
}

Projects.propTypes = {};

export default Projects;
