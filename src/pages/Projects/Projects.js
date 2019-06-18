import React, { Component } from 'react';
import './index.scss';
import ProjectListColumns from '../../components/ProjectList/ProjectListColumns';
import ProjectListRows from '../../components/ProjectList/ProjectListRows';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

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

  render() {
    return (
      <section className="project-container" id="projects">
        <div className="header-wrapper">
          <h1 className="title">Projects</h1>
          <img src={GreyMob} className="greybg greybg-mob" alt="" />
          <img src={GreyDesk} className="greybg greybg-desk" alt="" />
        </div>

        {this.state.width > 950 ? <ProjectListRows /> : <ProjectListColumns />}
      </section>
    );
  }
}

export default Projects;
