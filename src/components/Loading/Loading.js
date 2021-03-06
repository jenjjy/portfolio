import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1
  }
};

function Loading(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h1 className="title">Jen is thinking</h1>
      <LinearProgress />
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);
