import React from 'react';
import { withStyles } from 'material-ui/styles';

import MainTab from '../common/mainTab';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  
});

const HomePage = () => {
  return (
    <div className={styles.root}>
      <MainTab className={ styles.centerTab }/>
      <h1>home page</h1>
    </div>
  );
};

export default withStyles(styles)(HomePage);