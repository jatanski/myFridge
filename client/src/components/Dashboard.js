import React, { Component } from 'react';

import FridgeContent from './fridge/FridgeContent';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <section className="">
        <div className="">
          <div className="card  m-3">
            <div className="card-body">
              <h2 className="h2-responsive">Currently in your fridge</h2>
              <FridgeContent disableAdding="true" autoLoad="true" disableRemoving="true"></FridgeContent>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
