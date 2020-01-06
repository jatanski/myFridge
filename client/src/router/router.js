import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../pages/Home';
import Navigation from '../components/Navigation';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Fridge from '../pages/Fridge';

export default function AppRouter() {
  const history = createBrowserHistory();
  return (
    <Router>
      {history.location.pathname !== '/wyjatek' ? <Navigation /> : null}
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/fridge" component={Fridge} />
    </Router>
  );
}
