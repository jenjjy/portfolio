import React, { Component } from 'react';
import styles from './index.scss';
import { withStyles } from '@material-ui/core';
import TitleWrapper from '../../components/TitleWrapper';
import PieGraph from '../../components/Graphs/PieGraph';

class Skills extends Component {
  render() {
    return (
      <section className="container skills" id="skills">
        <TitleWrapper>
          <h1 className="title">Technical Skills</h1>
        </TitleWrapper>
        <article className="content-wrapper">
          <div className="PieGraph">
            <PieGraph />`
          </div>
        </article>
      </section>
    );
  }
}

Skills.propTypes = {};

export default withStyles(styles)(Skills);
