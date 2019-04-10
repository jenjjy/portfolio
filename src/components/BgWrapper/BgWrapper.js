import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const BgWrapper = ({ props, children }) => {
  return (
    <div className="flex">
      <div className="bodytags toptag">
        <p className="tags">&lt;body&gt;</p>
        <div className="children" {...props}>
          {children}
        </div>
      </div>
      <div>
        <p className="tags bodytags">&lt;&#47;body&gt;</p>
        <p className="tags">&lt;&#47;html&gt;</p>
      </div>
    </div>
  );
};

BgWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default BgWrapper;
