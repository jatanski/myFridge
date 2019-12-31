import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <Link to="/" className="link">
        <h4>Home</h4>
      </Link>
      <ul>
        <Link to="/example" className="link">
          <li>Example</li>
        </Link>
        <Link to="/example" className="link">
          <li>Example</li>
        </Link>
      </ul>
    </nav>
  );
}
