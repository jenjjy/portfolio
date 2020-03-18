import React from 'react';
import { Link } from 'react-scroll';
import { withStyles } from '@material-ui/core';
import styles from './index.scss';
import { Slide } from 'react-reveal';
import { KeyboardArrowDown } from '@material-ui/icons';
import VideoPlayer from '../../components/VideoPlayer';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="subcontainer">
        <section>
          <Slide right cascade>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              // duration={500}
            >
              <div className="title-wrapper">
                <h1 className="home-title">
                  Hello<span className="reverse">!</span> I'm
                </h1>

                <div className="row">
                  <h1 className="home-title">
                    Jennifer <span className="reverse">Yiu</span>,
                  </h1>
                </div>

                <h1 className="home-title third-line">Full-Stack Developer.</h1>
              </div>
            </Link>
          </Slide>
          <h2 className="subheading">
            {/* Dynamic / Talented / Passionate */}
            {/* Problem Solver / Resourceful / Creative */}
            Adaptable / Resourceful / Problem Solver
          </h2>

          <div className="player-wrapper-column">
            <VideoPlayer link="http://youtu.be/_dE-DZQ7IMM" />
          </div>

          <div className="btn-wrapper">
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              // duration={500}
            >
              <button className="slide home-btn">View my work</button>
            </Link>
          </div>
        </section>

        <div className="player-wrapper-row">
          <VideoPlayer link="http://youtu.be/_dE-DZQ7IMM" />
        </div>
      </div>
      <Link
        to="about"
        className="scroll-btn"
        activeClass="active"
        spy={true}
        smooth={true}
      >
        <span className="scroll-ani">
          <KeyboardArrowDown fontSize="large" />
        </span>
        <p>Scroll</p>
      </Link>
    </div>
  );
};

export default withStyles(styles)(Home);
