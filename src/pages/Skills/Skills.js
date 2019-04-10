import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import PieGraph from '../../components/PieGraph';

class Skills extends Component {
  render() {
    return (
      <section className="container" id="skills">
        <BgWrapper>
          <TitleWrapper>
            <h1 className="title">Technical Skills</h1>
          </TitleWrapper>
          <div className="graphWrapper">
            <PieGraph />
          </div>
        </BgWrapper>
      </section>
    );
  }
}

Skills.propTypes = {};

export default Skills;
