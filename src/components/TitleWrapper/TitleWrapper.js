import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TitleWrapper = ({ props, children }) => {
  return (
    <div>
      <p className="tags">&lt;h1&gt;</p>
      <div {...props}>{children}</div>
      <p className="tags">&lt;/h1&gt;</p>
    </div>
  );
};

TitleWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TitleWrapper;
