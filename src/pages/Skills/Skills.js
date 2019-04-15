import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import PieGraph from '../../components/Graphs/PieGraph';
import SmlPieGraph from '../../components/Graphs/SmlPieGraph';
import styles from './index.scss';

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

              <div className="skills-mobile">
                <SmlPieGraph />
              </div>
            </article>
          </section>
        </BgWrapper>
      </section>
    );
  }
}

Skills.propTypes = {};

export default withStyles(styles)(Skills);
