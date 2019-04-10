import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import './index.scss';
import jj from '../../images/jj.png';
import TitleWrapper from '../../components/TitleWrapper';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <section className="title-wrapper">
          <h1 className="greeting">
            Hello<span className="brand">!</span>
          </h1>
          <div className="row">
            <h1 className="greeting space">
              <span className="greeting">I'm </span>
              {/* <img src={jj} width="30" /> */}
              <span className="greeting">Jennifer</span>
              <span className="greeting">,</span>
            </h1>
          </div>

          <div clasName="row">
            <h1 className="greeting">
              <span className="greeting">full-</span>
              <span className="greeting">stack </span>
              <span className="greeting">developer</span>
              <span className="greeting">.</span>
            </h1>
          </div>

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
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
