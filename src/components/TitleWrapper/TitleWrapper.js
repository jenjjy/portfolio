import React from 'react';
import './index.scss';

const TitleWrapper = ({ props, children }) => {
  return (
    <div className="titlewrapper">
      <p className="tags">&lt;h1&gt;</p>
      <div {...props}>{children}</div>
      <p className="tags">&lt;&#47;h1&gt;</p>
    </div>
  );
};

export default TitleWrapper;
