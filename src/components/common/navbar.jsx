import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Search from './search';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Jeans
          </Typography>
          <div>
            <Search />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
