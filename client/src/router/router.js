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


const PrivateRoute = ({ pushForwardProps, isLoaded, loggedInStatus, component: Component, ...rest }) => {
  const redirectLink = "./login";
  return (
    < Route
      {...rest}
      render={props =>
        !isLoaded ? (
          <></>
        ) : loggedInStatus ? (
          <Component {...props} {...pushForwardProps} />
        ) : (
              <Redirect to={redirectLink} />
            )
      }
    />
  );
};

export default class AppRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: false,
      isLoaded: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(data) {
    this.setState({
      logged: axios.get('http://localhost:8000/api/logged_in', { headers: { 'x-auth-token': localStorage.getItem('x-auth-token') } })
        .then(response => {
          if (response.data === 'Valid Token' && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
            return true;
          }
        })
        .catch((err) => {
          if (err.response !== undefined) {
            return false;
          }
        }),
      loggedInStatus: "LOGGED_IN"
    })
  }
  checkLoginStatus() {
    axios.get('http://localhost:8000/api/logged_in', { headers: { 'x-auth-token': localStorage.getItem('x-auth-token') } })
      .then(response => {
        if (response.data === 'Valid Token' && this.state.loggedInStatus === false) {
          this.setState({
            loggedInStatus: true,
            isLoaded: true,
          })
        }
      })
      .catch((err) => {
        // if (err.response !== undefined) { w przypadku problemu z połączenie z serwerem równierz nastąpi przekierowanie do logowania
        this.setState({
          loggedInStatus: false,
          isLoaded: true,
        })

      })
  }
  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      < Router >
        <Route path="/" render={props => (props.history.location.pathname !== '/AddItemToDB' && props.history.location.pathname !== '/login' && props.history.location.pathname !== '/register' ? <Navigation {...props} loggedInStatus={this.state.loggedInStatus} /> : null)} />
        <PrivateRoute exact path="/" component={Home} isLoaded={this.state.isLoaded} loggedInStatus={this.state.loggedInStatus} pushForwardProps={{ loggedInStatus: this.state.loggedInStatus }} />
        <PrivateRoute path="/mealList" component={MealListPage} isLoaded={this.state.isLoaded} loggedInStatus={this.state.loggedInStatus} />
        <PrivateRoute path="/fridge" component={Fridge} isLoaded={this.state.isLoaded} loggedInStatus={this.state.loggedInStatus} />
        <PrivateRoute path="/AddItemToDB" component={AddItemToDBForm} isLoaded={this.state.isLoaded} loggedInStatus={this.state.loggedInStatus} />
        <Route exact path="/register" render={props => (<Register {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
        <Route exact path="/login" render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
      </Router >
    );
  }
}
