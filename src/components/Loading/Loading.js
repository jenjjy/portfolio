import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Typography, withStyles } from '@material-ui/core';

const Loading = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography>Loading...</Typography>
    </div>
  );
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Loading);
