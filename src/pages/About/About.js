import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import './index.scss';
import TitleWrapper from '../../components/TitleWrapper';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">About me</h1>
        <p className="text">
          I remember writing my first code at 6-years-old. My brother showed me
          how to play music.
        </p>
      </div>
    );
  }
}

About.propTypes = {};

export default About;
