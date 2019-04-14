import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import styles from './index.scss';

class OutlinedTextFields extends React.Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <section className="form-container">
        <form className="form" noValidate autoComplete="off">
          <div className="name-email">
            <TextField
              id="outlined-name"
              label="Name"
              className="textField width"
              color="primary"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              className="textField width"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              color="primary"
            />
          </div>

          <TextField
            id="outlined-subject"
            label="Subject"
            className="textField full-width"
            value={this.state.subject}
            onChange={this.handleChange('subject')}
            margin="normal"
            variant="outlined"
            color="primary"
          />

          <TextField
            fullWidth={true}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows="5"
            className="textField full-width"
            inputMultiline="white"
            margin="normal"
            variant="outlined"
            color="primary"
          />

          <div className="btn-wrapper">
            <Button
              className="send-btn"
              color="primary"
              href="/contact"
              variant="outlined"
            >
              <Send /> {'  '}Send
            </Button>
          </div>
        </form>
      </section>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
