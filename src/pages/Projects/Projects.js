import React, { Component } from 'react';
import './index.scss';
import ProjectList from '../../components/ProjectList';
import TitleWrapper from '../../components/TitleWrapper';

class Projects extends Component {
  render() {
    return (
      <section className="project-container" id="projects">
        <TitleWrapper>
          <h1 className="title">Projects</h1>
        </TitleWrapper>
        <ProjectList />
      </section>
    );
  }
}

export default Projects;
