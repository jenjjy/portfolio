import React, { Component } from 'react';
import './index.scss';
import GridList from '../../components/GridList';

class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <GridList />
      </div>
    );
  }
}

export default Projects;
