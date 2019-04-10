import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Typography, withStyles } from '@material-ui/core';

const TitleWrapper = ({ props }) => {
  return (
    <div>
      <Typography className="tags">&lt;h1&gt;</Typography>

      <Typography {...props}>{props.children}</Typography>
      <Typography className="tags">&lt;/h1&gt;</Typography>
    </div>
  );
};

TitleWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(TitleWrapper);
