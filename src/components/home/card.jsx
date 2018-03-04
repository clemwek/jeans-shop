import React from 'react';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    margin: 10,
    maxWidth: 400,
  },
  media: {
    width: 400,
    height: 200,
  },
};

function JeansCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/img/jeans.jpg"
          title="Contemplative Reptile"
        />
        <CardActions>
          <Button size="small" color="primary">
            price
          </Button>
          <Button size="small" color="primary">
            Order
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}


export default withStyles(styles)(JeansCard);