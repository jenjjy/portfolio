import React, { useState, useRef } from 'react';
import './index.scss';
import classes from './AnimateText.module.css';

const AnimateText = ({ textColor, overlayColor, children, ...props }) => {
  return (
    <Section className={classes.animatedTextContainer}>
      {...props}
      <h1 style={{ color: textColor }} className={classes.animatedTextContent}>
        {children}
      </h1>
      <h1
        style={{ color: textColor }}
        className={classes.animatedTextContentMirror}
      >
        {children}
      </h1>
    </Section>
  );
};

export default { AnimateText };
