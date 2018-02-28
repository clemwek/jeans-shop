import React from 'react';

import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <TextField
        placeholder="search"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
      <Button variant="raised" color="primary" className={classes.button}>
        Signin
      </Button>
      <Button variant="raised" color="primary" className={classes.button}>
        Signup
      </Button>
    </div>
  );
};

export default withStyles(styles)(Navbar);
