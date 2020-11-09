import './App.css';
import React, { Component } from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Link from '@material-ui/core/Link';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link href="#/login" variant="body2">Forgot password?</Link>
        <HashRouter>
          <Switch>
            <Route path='/login' exact name="Login" component={Login} />
            <Route path='/user' exact name="User" component={Dashboard} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
