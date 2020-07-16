import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from './shared/components/Home';

import Navbar from './shared/components/Navigation/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/games' exact></Route>
        <Route path='/features' exact></Route>
        <Route path='/pricing' exact></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
