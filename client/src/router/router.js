import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ExamplePage from '../pages/ExamplePage';
import Navigation from '../components/Navigation';

export default function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/example" component={ExamplePage} />
    </Router>
  );
}
