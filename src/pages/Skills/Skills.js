import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import PieGraph from '../../components/Graphs/PieGraph';
import SmlPieGraph from '../../components/Graphs/SmlPieGraph';

class Skills extends Component {
  render() {
    return (
      <section className="container" id="skills">
        <BgWrapper>
          <TitleWrapper>
            <h1 className="title">Technical Skills</h1>
          </TitleWrapper>
          <section className="content-wrapper">
            <p className="skills-text">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure.
            </p>

            <div className="PieGraph">
              <PieGraph />
            </div>
            <div className="SmlPieGraph">
              <SmlPieGraph />
            </div>
          </section>
        </BgWrapper>
      </section>
    );
  }
}

Skills.propTypes = {};

export default Skills;
