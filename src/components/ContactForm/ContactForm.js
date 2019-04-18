import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
// import classNames from 'classnames';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    maxWidth: 500
  },

  cssLabel: {
    color: '#37393b'
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },

  cssFocused: { color: theme.palette.primary.main },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: `${theme.palette.secondary.main} !important`
  },
  input: { color: '#fff' },

  btn: {
    alignSelf: 'flex-end',
    marginTop: 15
  }
});

class ContactForm extends React.Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className="name-email">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              },
              inputMode: 'numeric'
            }}
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('email')}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              },
              inputMode: 'numeric'
            }}
          />
        </div>

        <TextField
          fullWidth={true}
          id="outlined-subject"
          label="Subject"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('subject')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            },
            inputMode: 'numeric'
          }}
        />

        <TextField
          fullWidth={true}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows="5"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('message')}
          inputMultiline="white"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            },
            inputMode: 'numeric'
          }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(ContactForm);
