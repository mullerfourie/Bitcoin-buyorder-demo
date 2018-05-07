import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import BuyBitcoin from './pages/BuyBitcoin';
import Orders from './pages/Orders';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={BuyBitcoin}/>
          <Route path="/orders" component={Orders}/>
        </div>
      </Router>
    );
  }
};

render(<App />, document.getElementById('reactapp'));