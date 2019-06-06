import React from 'react';
import styles from './index.scss';
import { withStyles } from '@material-ui/core';
import PieGraph from '../../components/Graphs/PieGraph';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';

const Skills = () => {
  return (
    <section className="container skills" id="skills">
      <div className="header-wrapper">
        <h1 className="title">Technical Skills</h1>
        <img src={GreyMob} className="greybg greybg-mob" alt="" />
        <img src={GreyDesk} className="greybg greybg-desk" alt="" />
      </div>

      <div className="PieGraph">
        <PieGraph />`
      </div>
    </section>
  );
};

export default withStyles(styles)(Skills);
