import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';
import ContactForm from '../../components/ContactForm';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <BgWrapper>
          <TitleWrapper>
            <h1 className="title">Contact</h1>
          </TitleWrapper>
          <ContactForm />
        </BgWrapper>
      </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;
