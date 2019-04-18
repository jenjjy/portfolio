import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import styles from './index.scss';
import { Slide } from 'react-reveal';

class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home">
        <section>
          <Slide right cascade>
            <div className="title-wrapper">
              <h1 className="home-title">
                Hello<span className="reverse">!</span> I'm
              </h1>

              <div className="row">
                <h1 className="home-title">
                  Jennifer <span className="reverse">Yiu</span>,
                </h1>
              </div>

              <h1 className="home-title">unicorn developer.</h1>
            </div>
          </Slide>
          <h2 className="subheading">
            Resourceful / Problem Solver / Creative
          </h2>

          <div className="btn-wrapper">
            <Button
              className="contact-btn"
              color="primary"
              variant="outlined"
              href="#projects"
            >
              View my work
            </Button>
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {};

export default withStyles(styles)(Home);
