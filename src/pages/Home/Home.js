import React from 'react';
import { Link } from 'react-scroll';
import { withStyles } from '@material-ui/core';
import styles from './index.scss';
import { Slide } from 'react-reveal';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <section>
        <Slide right cascade>
          <Link
            to="about"
            // className="links"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
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

              <h1 className="home-title third-line">Frontend Developer.</h1>
            </div>
          </Link>
        </Slide>
        <h2 className="subheading">
          {/* Dynamic / Talented / Passionate */}
          {/* Problem Solver / Resourceful / Creative */}
          Adaptable / Quick Learner / Positive
        </h2>

        <div className="btn-wrapper">
          <Link
            to="projects"
            className="contact-btn"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            View my work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default withStyles(styles)(Home);
