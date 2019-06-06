import React from 'react';
import PropTypes from 'prop-types';
import { Fab, withStyles } from '@material-ui/core';
import './index.scss';
import gh from '../../images/gh.svg';

const styles = {
  root: {
    border: '1px solid #14a37f'
  },
  label: {
    fontWeight: 500,
    padding: '0 8px',
    textTransform: 'lowercase'
  }
};

const GithubBtn = props => {
  const { classes } = props;

  return (
    <Fab
      className="icon"
      href={props.link}
      color="primary"
      variant="extended"
      size="small"
      classes={{
        root: classes.root,
        label: classes.label
      }}
    >
      <img className="github-icon" src={gh} alt="View more on Github" />
      <p className="gh-text">View More</p>
    </Fab>
  );
};

GithubBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GithubBtn);
