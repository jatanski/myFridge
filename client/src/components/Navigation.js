import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/example">
        <h4>Example</h4>
      </Link>
    </nav>
  );
}
