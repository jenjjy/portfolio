import React from 'react';
import { Mail, Phone } from '@material-ui/icons';
import VideoPlayer from '../../components/VideoPlayer';
import linkedin from '../../images/icons/white-linkedin.png';
import angellist from '../../images/icons/angellist.png';
import github from '../../images/icons/github.png';

import vietnam from '../../images/vietnam-motorbike.jpg';
import mural from '../../images/bangkok-mural.jpg';
import headshot from '../../images/RedAcademyYVR_Headshots_Jennifer_20181207_040.jpg';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';
import roctopus from '../../images/scubadive.png';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact" id="contact">
        <div className="header-wrapper">
          <h1 className="title">Contact Me</h1>
          <img src={GreyMob} className="greybg greybg-mob" alt="" />
          <img src={GreyDesk} className="greybg greybg-desk" alt="" />
        </div>

        <div className="info-wrapper">
          <div className="text-wrapper">
            <p className="text">
              Looking for someone with enthusiasm, positive energy, and a can-do
              attitude? Then I'm the right candidate for you!
            </p>
          </div>
        </div>

        <div className="">
          <VideoPlayer link="http://youtu.be/_dE-DZQ7IMM" />
        </div>

        <div className="icon-container">
          {/* <div className="icon-wrapper">
            <Phone className="icon" /> 604-780-6231
          </div> */}
          <a className="icon-wrapper" href={`mailto: jen.yiu.90@gmail.com`}>
            <Mail className="icon" /> jen.yiu.90@gmail.com
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
            href="https://angel.co/jenbitz"
          >
            <img src={angellist} className="icon" alt="AngelList" />
            AngelList
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
            href="https://www.linkedin.com/in/jennifer-yiu/"
          >
            <img src={linkedin} className="icon" alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact-images">
        <img
          src={headshot}
          className="contact-img"
          alt="Jennifer Yiu's headshot"
        />
        <img
          src={mural}
          className="contact-img"
          alt="Jennifer painting a mural in Bangkok"
        />
        <img
          src={roctopus}
          className="contact-img"
          alt="Jennifer scuba diving in Koh Tao, Thailand"
        />
        <img
          src={vietnam}
          className="contact-img"
          alt="Jennifer on her motorbike trip around Northern Vietnam"
        />
      </div>

      <p className="credit">
        <a
          className="author"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jennifer-yiu/"
        >
          Jennifer Yiu
        </a>
        &copy; 2019. Built with React, SCSS, and Material-UI.
      </p>
    </section>
  );
};

export default Contact;
