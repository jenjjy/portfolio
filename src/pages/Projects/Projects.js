import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import GridList from '../../components/GridList';
import msb from '../../images/projects/mainstbrewing.gif';

class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <GridList />
      </div>
    );
  }
}

Projects.propTypes = {};

export default Projects;
