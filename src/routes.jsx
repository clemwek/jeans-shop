import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/home/home';
import Navbar from './components/common/navbar';

export default () => (
  <BrowserRouter>
    <div>
      <Route component={Navbar}></Route>
      <Route exact path="/" component={HomePage}></Route>
    </div>
  </BrowserRouter>
);
