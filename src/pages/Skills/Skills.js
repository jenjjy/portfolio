import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import PieGraph from '../../components/Graphs/PieGraph';
import SmlPieGraph from '../../components/Graphs/SmlPieGraph';
import BarChart from '../../components/Graphs/BarChart';

class Skills extends Component {
  render() {
    return (
      <section className="container" id="skills">
        <BgWrapper>
          <section className="desktop-wrapper">
            <TitleWrapper>
              <h1 className="title">Technical Skills</h1>
            </TitleWrapper>
            <article className="content-wrapper">
              <p className="skills-text" />

              <div className="PieGraph">
                <PieGraph />
              </div>
              <div className="SmlPieGraph">
                <BarChart />
              </div>
            </article>
          </section>
        </BgWrapper>
      </section>
    );
  }
}

Skills.propTypes = {};

export default Skills;
