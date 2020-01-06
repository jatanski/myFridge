import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ExamplePage from '../pages/ExamplePage';
import Navigation from '../components/Navigation';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Fridge from '../pages/Fridge';

export default function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/example" component={ExamplePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/fridge" component={Fridge} />
    </Router>
  );
}
