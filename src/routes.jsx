import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/home/home'

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage}></Route>
    </div>
  </BrowserRouter>
);
