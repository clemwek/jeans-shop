import React from 'react';
import { withStyles } from 'material-ui/styles';

import MainTab from '../common/mainTab';
import JeansCard from './card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  mainSection: {
    justifyContent: "space-around",
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
  },
});

const HomePage = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <MainTab />
      <div className={classes.mainSection}>
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
        <JeansCard />
      </div>
    </div>
  );
};

export default withStyles(styles)(HomePage);