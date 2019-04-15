import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import EventResult from './EventResult'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/events/:id/results" component={EventResult}></Route>
      </Router>
    );
  }
}

export default App;
