import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, IconButton, withStyles } from '@material-ui/core';
import styles from './index.scss';
import { Headshake, Reveal, Slide } from 'react-reveal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/contact" />;
    }
  };

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
            Creative / Open-Minded / Problem Solver
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
