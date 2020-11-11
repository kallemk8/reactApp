import './App.css';
import React, { Component } from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import Register from './Register'
import Forgot from './Forgot'
import { HashRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path='/login' exact name="Login" component={Login} />
            <Route path='/user' exact name="User" component={Dashboard} />
            <Route path='/' exact name="Register" component={Register} />
            <Route path='/forgot' exact name="Register" component={Forgot} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
