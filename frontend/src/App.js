import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from './shared/components/Home';

import Games from './games/pages/Games';
import Features from './features/pages/Features';
import Pricing from './pricing/pages/Pricing';

import Navbar from './shared/components/Navigation/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/games' exact>
          <Games />
        </Route>
        <Route path='/features' exact>
          <Features />
        </Route>
        <Route path='/pricing' exact>
          <Pricing />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
