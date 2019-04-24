import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import { Mail, Phone } from '@material-ui/icons';
import styles from './index.scss';
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
          <p className="text">
            Looking for someone with enthusiasm, positive energy, and a can-do
            attitude? Then I'm the right candidate for you! Don't see it? Why
            don't we meet in person?
          </p>
          <div className="icon-container">
            <div className="icon">
              <Phone className="icon" /> 604-780-6231
            </div>
            <a className="icon" href={'mailto:' + 'jen.yiu.90@gmail.com'}>
              <Mail className="icon" /> jen.yiu.90@gmail.com
            </a>
          </div>
          <p className="text">
            Alternatively, feel free to e-mail me in the contact form below:
          </p>
        </div>
        <div className="contact-form">
          <ContactForm />
          <div className="btn">
            <Button
              className="send-btn"
              color="primary"
              href="/contact"
              variant="outlined"
            >
              Send
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Contact);
