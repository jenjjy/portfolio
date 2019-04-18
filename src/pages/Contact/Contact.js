import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import TitleWrapper from '../../components/TitleWrapper';
import ContactForm from '../../components/ContactForm';

class Contact extends Component {
  render() {
    return (
      <section className="container contact" id="contact">
        <TitleWrapper>
          <h1 className="title">Contact Me</h1>
        </TitleWrapper>
        <div className="text-wrapper">
          <p>
            Looking for someone enthusiastic, has great energy, and a thirst to
            learn? Then I'm the right candidate for you! Don't see it? Let's
            arrange to meet in person.
          </p>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </section>
    );
  }
}

Contact.propTypes = {};

export default Contact;
