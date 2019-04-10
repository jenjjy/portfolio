import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import smallj from '../../images/smallj.png';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    return (
      <div className="home-container">
        <BgWrapper>
          <section className="title-wrapper">
            <TitleWrapper>
              <h1 className="greeting">
                Hello<span className="brand">!</span>
              </h1>
              <div className="row">
                <h1 className="greeting space">
                  <span className="greeting">I'm </span>
                  <span className="greeting">Jennifer</span>
                  <span className="greeting">,</span>
                </h1>
              </div>

              <div className="row">
                <h1 className="greeting">
                  <span className="greeting">full-</span>
                  <span className="greeting">stack </span>
                  <span className="greeting">developer</span>
                  <span className="greeting">.</span>
                </h1>
              </div>
            </TitleWrapper>

            <h2 className="subheading">
              Creative / Open-Minded / Problem Solver
            </h2>

            <button
              className="button"
              onClick={() => {
                console.log('clicked!');
              }}
            >
              Contact Me
            </button>
          </section>
        </BgWrapper>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
