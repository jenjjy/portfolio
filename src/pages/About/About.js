import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './index.scss';
import profileMobile from '../../images/redbg-mobile.png';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';
import VideoPlayer from '../../components/VideoPlayer';

const About = () => {
  const urllink = 'https://youtu.be/E7lBtEz4eX4';

  return (
    <div className="container about" id="about">
      <div className="header-wrapper">
        <h1 className="title">About Me</h1>
        <img src={GreyMob} className="greybg greybg-mob" alt="" />
        <img src={GreyDesk} className="greybg greybg-desk" alt="" />
      </div>

      <section className="about-content-wrapper">
        <img
          src={profileMobile}
          className="profile-mobile"
          width="300"
          alt="Jennifer Yiu"
        />

        <p className="text">
          I am a full-stack developer passionate about sustainability,
          community-building, and the future of tech. My curiosity about the
          world around me drives me to learn and grow - whether it’s learning
          how to drive a manual car, solve a Rubik’s cube, became a certified
          scuba diver, understand blockchain, or backpack in Europe and
          Southeast Asia.
        </p>
        <p className="text">
          My first exposure to code was at 6 years old. My brother showed me how
          to write scripts to play a simple song on the computer. I was
          enthralled by how a combination of characters and symbols can turn the
          computer into a piano. In sixth grade, I built my first website using
          HTML.
        </p>
        {/* <p className="text">
              As I dive deeper into the world of development and technology, my
              passion for it grows stronger. It’s challenging, evolving, and
              it’s the future. The tech world is ever-changing and I want to
              work in a team to create something amazing together.
            </p> */}

        <p className="text">
          My primary focus is in front-end technologies including
          <span className="techs">
            {' '}
            CSS, SCSS, React, React-Native, JavaScript, jQuery, and PHP.{' '}
          </span>
          I've also been working a lot with back-end technologies such as{' '}
          <span className="techs">Python, SQL and Django</span> and am
          interested to learn more! I want to continue develop my skills and
          improve on writing code. I have great energy, a "can-do" attitude, and
          I'm always working towards improving myself everyday.
        </p>
        <VideoPlayer link={urllink} />
        <p className="text">
          If you love discussing new ideas or are in tech, let’s connect! I’d
          love to chat about new technology, my expertise, your expertise and
          how we might work together!
        </p>
      </section>
    </div>
  );
};

export default withStyles(styles)(About);
