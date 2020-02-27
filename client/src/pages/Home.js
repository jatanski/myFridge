import React from 'react';
import '../scss/pages/app.scss';
import Dashboard from '../components/Dashboard';

function Home(props) {
  return (
    <div className="App">
      <h1 className="mx-3 my-4 h1-responsive">Dashboard</h1>
      <h2>Status: {props.loggedInStatus}</h2>
      <Dashboard></Dashboard>
    </div>
  );
}

export default Home;
