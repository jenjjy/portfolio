import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const BgWrapper = ({ props, children }) => {
  return (
    <div className="bg-wrapper">
      <div className="bodytags">
        <p className="tags">&lt;body&gt;</p>
        <div className="children" {...props}>
          {children}
        </div>

        <p className="tags">&lt;&#47;body&gt;</p>
      </div>
      <p className="tags">&lt;&#47;html&gt;</p>
    </div>
  );
};

BgWrapper.propTypes = {
  // classes: PropTypes.object.isRequired
};

export default BgWrapper;
