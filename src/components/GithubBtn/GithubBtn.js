import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowRight } from '@material-ui/icons';
import './index.scss';

const GithubBtn = props => {
  return (
    <div className="gh-link-wrapper">
      <a
        href={props.link}
        target="_blank"
        rel="noopener norefferer"
        className="github-link-ani"
      >
        <p className="gh-text">View More</p>
        <KeyboardArrowRight />
      </a>
    </div>
  );
};

GithubBtn.propTypes = {
  link: PropTypes.string.isRequired
};

export default GithubBtn;
