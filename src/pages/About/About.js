import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core';
import styles from './index.scss';
import profile from '../../images/redbg-small.jpeg';
import profileMobile from '../../images/redbg-mobile.png';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';

class About extends Component {
  render() {
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
          <div className="sectionOne">
            <img
              src={profile}
              className="profile"
              width="300"
              alt="Jennifer Yiu"
            />
            <div className="text-wrapper">
              <p className="text">
                I love learning about how something works and functions. My
                curiosity drives me to continuously learn and grow - whether
                it’s learning how to drive a manual car, solve a Rubik’s cube,
                became a certified scuba diver, understand blockchain, or
                backpack in Europe and Southeast Asia.
              </p>
              <p className="text">
                My first exposure to code was at 6 years old. My brother showed
                me how to write scripts to play a simple song on the computer. I
                was enthralled by how a combination of characters and symbols
                can turn the computer into a piano. In sixth grade, I built my
                first website using HTML. I’ve decided to pursue this passion by
                completing a Diploma in FullStack Development where I helped
                build industry quality websites and applications.
              </p>
              <p className="text">
                As I dive deeper into the world of development and technology,
                my passion for it grows stronger. It’s challenging, evolving,
                and it’s the future. The tech world ever-changing and I want to
                work in a team to create something amazing together.
              </p>
            </div>
          </div>

          <div className="sectionTwo">
            <div className="text-wrapper">
              <p className="text">
                My focus is mostly front-end technologies including{' '}
                <span className="techs">
                  {' '}
                  CSS, SCSS, React, React-Native, JavaScript, jQuery, and PHP.
                </span>{' '}
                I want to continue to learn and grow as I develop my skills and
                improve on writing code. I have great energy, a "can-do"
                attitude, and I'm always working towards improving myself
                everyday.
              </p>

              <p className="text">
                If you love discussing new ideas or are in tech, let’s connect!
                I’d love to chat about new technology, my expertise, your
                expertise and how we might work together!
              </p>
            </div>
            <ReactPlayer
              url="https://youtu.be/E7lBtEz4eX4"
              playing
              muted="true"
              height="250px"
              width="420px"
              loop="true"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(About);
