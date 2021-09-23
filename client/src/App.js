import React from 'react';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegisterMobile from './components/RegisterMobile'
import LoginMobile from './components/LoginMobile'
import RequestCreate from './components/RequestCreate'
import Requests from './components/Requests'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterMobile} />
          <Route exact path="/login" component={LoginMobile} />
          <Route exact path="/request" component={RequestCreate} />
          <Route exact path="/requests" component={Requests} />
        </Switch>
      </Router>
    );
  }
}

export default App;
