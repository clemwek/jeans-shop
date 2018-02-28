import React from 'react';

import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';


export default class MainTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper style={{ width: 500, marginLeft: "auto", marginRight: "auto", marginTop: "10px" }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<PhoneIcon />} label="ALL" />
          <Tab icon={<FavoriteIcon />} label="ESSENTIAL" />
          <Tab icon={<PersonPinIcon />} label="SIGNATURE" />
        </Tabs>
      </Paper>
    );
  }
}