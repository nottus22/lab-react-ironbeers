import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// components imports
import nothome from './components/Home';
import Navbar from './components/Navbar';
import Beers from './components/Beers'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={nothome} />
          <Route exact path='/beers' component={Beers} />
        </Switch>
    </div>
  );
}

export default App;