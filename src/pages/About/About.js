import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <BgWrapper>
          <TitleWrapper>
            <h1 className="title">About me</h1>
          </TitleWrapper>
          <p className="text">
            I love learning about how something works and functions. My
            curiosity drives me to continuously learn and grow - whether it’s
            learning how to drive a manual car, solve a Rubik’s cube, understand
            blockchain, or backpack in Europe and Southeast Asia.
          </p>
          <p className="text">
            My first exposure to code was at 6 years old. My brother showed me
            how to write scripts to play a simple song on the computer. I was
            enthralled by how a combination of characters and symbols can turn
            the computer into a piano. In sixth grade, I built my first website
            using HTML. I’ve decided to pursue this passion by completing a
            Diploma in FullStack Development where I helped build industry
            quality websites and applications.
          </p>
          <p className="text">
            As I dive deeper into the world of development and technology, my
            passion for it grows stronger. It’s challenging, evolving, and it’s
            the future. They world is dynamic and I want to continue to build
            something with a team.
          </p>
          <p className="text">
            If you love discussing new ideas or are in tech, let’s connect! I’d
            love to chat about new technology, my expertise, your expertise and
            how we might work together!
          </p>
        </BgWrapper>
      </div>
    );
  }
}

About.propTypes = {};

export default About;
