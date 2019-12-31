import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}
