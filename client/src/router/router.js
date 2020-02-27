import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Home from '../pages/Home';
import Navigation from '../components/Navigation';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MealListPage from '../pages/MealListPage';
import Fridge from '../pages/Fridge';
import AddItemToDBForm from '../pages/AddItemToDBForm';

export default class AppRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  checkLoginStatus() {
    axios.get('http://localhost:8000/api/logged_in', { headers: { 'x-auth-token': localStorage.getItem('x-auth-token') } })
      .then(response => {
        if (response.data === 'Valid Token' && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          })
        } else if (!response.data === 'Valid Token' && this.state.loggedInStatus === 'LOGGED_IN') {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          })
        }
      })
      .catch((err) => { console.log(err.response.data) })
  }
  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <Router>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" render={props => (props.history.location.pathname !== '/AddItemToDB' ? <Navigation {...props} loggedInStatus={this.state.loggedInStatus} /> : null)} />
        <Route exact path="/" render={props => (this.state.loggedInStatus === 'LOGGED_IN' ? <Home {...props} loggedInStatus={this.state.loggedInStatus} /> : <Redirect to="/login" />)} />
        <Route exact path="/register" render={props => (<Register {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
        <Route exact path="/login" render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
        <Route path="/mealList" component={MealListPage} />
        <Route path="/fridge" component={Fridge} />
        <Route path="/AddItemToDB" component={AddItemToDBForm} />
      </Router>
    );
  }
}
