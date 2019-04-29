import React, { Component } from 'react';
import styles from './index.scss';
import ProjectListColumns from '../../components/ProjectList/ProjectListColumns';
import ProjectListRows from '../../components/ProjectList/ProjectListRows';
import TitleWrapper from '../../components/TitleWrapper';
import { Button, IconButton, withStyles } from '@material-ui/core';
import gh from '../../images/gh.svg';

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
        <h1 className="title">Projects</h1>

        {this.state.width > 950 ? <ProjectListRows /> : <ProjectListColumns />}
        <div className="btn-container">
          <Button className="icon" color="primary" variant="outlined">
            <img
              className="github-icon"
              src={gh}
              alt="See the code on Github"
              // width="40"
            />
            <p>View Code on GitHub</p>
          </Button>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Projects);
