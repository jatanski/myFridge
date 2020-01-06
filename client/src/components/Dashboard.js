import React, { Component } from 'react';

import FridgeContent from './fridge/FridgeContent';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        <h2>Currently in fridge</h2>
        <FridgeContent disableAdding="true" autoLoad="true" disableRemoving="true"></FridgeContent>
      </section>
    );
  }
}

export default Dashboard;
