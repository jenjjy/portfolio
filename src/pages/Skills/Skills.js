import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import './index.scss';
import TitleWrapper from '../../components/TitleWrapper';

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className={{ color: 'white' }}>Skills</h1>
      </div>
    );
  }
}

Skills.propTypes = {};

export default Skills;
