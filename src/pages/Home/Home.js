import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, IconButton, withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import styles from './index.scss';

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
      <div className="home-container">
        <BgWrapper>
          <section>
            <div className="title-wrapper">
              <p className="tags">&lt;h1&gt;</p>
              <h1 className="home-title">
                Hello<span className="brand">!</span>
              </h1>
              <div className="row">
                <h1 className="home-title space">
                  <span className="home-title">I'm </span>
                  <span className="home-title">Jennifer</span>
                  <span className="home-title">,</span>
                </h1>
              </div>

              <div className="row">
                <h1 className="home-title">
                  <span className="home-title">full-</span>
                  <span className="home-title">stack </span>
                  <span className="home-title">developer</span>
                  <span className="home-title">.</span>
                </h1>
                <p className="tags">&#9;&lt;&#47;h1&gt;</p>
              </div>
            </div>
            <h2 className="subheading">
              Creative / Open-Minded / Problem Solver
            </h2>

            <div className="btn-wrapper">
              <Button
                className="contact-btn"
                color="primary"
                href="/contact"
                variant="outlined"
              >
                Contact Me
              </Button>
            </div>
          </section>
        </BgWrapper>
      </div>
    );
  }
}

Home.propTypes = {};

export default withStyles(styles)(Home);
